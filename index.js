/*Importing the required package*/
const {QuickDB} = require('quick.db');
const db = new QuickDB();
const express = require('express');
const server = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
const port = 3000; // you may change it later
/*Setting up*/
const charset = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@";
function generateSecureToken(length) {
  const randomBytes = crypto.randomBytes(length);
  const randomValues = Array.from(randomBytes);
  const token = randomValues.map(value => charset[value % charset.length]).join('');
  return token;
}
server.use(express.static(path.join(__dirname, 'public')));
server.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
const limiter = rateLimit({
    windowMs: 500,
    max: 10,
    message: "Too many requests, please try again later."
  });
server.use(limiter);
server.use(express.json());
const http_server = http.createServer(server);
const wss = new WebSocket.Server({ server:http_server });
server.post("/login",async (req,res) => {
  const username = req.body.username;
  const password = req.body.password;
  const val = await db.all();
  var hasAnswered = false;
  for (const el of val){
    if(el.id.startsWith("__account__")) {
      /*
      __account__{id}
      {"id":string,
      "token":string,
      "username":string,
      "password":hash} */
      if(username == JSON.parse(el.value).username)
      {
        const passwordMatch = await bcrypt.compare(password, JSON.parse(el.value).password);
        if(passwordMatch) {
          hasAnswered = true;
          req.session.token = JSON.parse(el.value).token;
          req.session.username = JSON.parse(el.value).username;
          req.session.aid = JSON.parse(el.value).id;
          res.send(`{"status":200,"message":"Logged in"}`);
          break;
        }
      }
    }
  }
  if(!hasAnswered) res.send(`{"status":401,"message":"Not logged in"}`);
})
server.post("/createaccount", async (req,res) => {
  const username = req.body.username;
  const password = req.body.password;
  try
  {
    const val = await db.all();
    for(const el of val)
    {
      if(el.id.startsWith("__account__")) {
        /*
        __account__{id}
        {"id":string,
        "token":string,
        "username":string,
        "password":hash} */
        if(username == JSON.parse(el.value).username) {
          throw "exist";
        }
      }
    }
    const id = new Date().getTime().toString();
    const token = generateSecureToken(45) + "@" + "__" + id + "#" + generateSecureToken(90);
    const passwords = await bcrypt.hash(password,10);
    const template_ = {
      "id":id,
      "token":token,
      "username":username,
      "password":passwords,
      "friendslist":[]
    }
    req.session.token = token;
    req.session.username = username;
    req.session.aid = id;
    await db.set(`__account__${id}`,JSON.stringify(template_));
    res.send(`{"status":200,"message":"created"}`);
  }catch(e)
  {
    res.send(`{"status":401,"message":"exist"}`);
  }
});
server.get("/logout",(req,res) => {
  req.session.aid = null;
  req.session.token = null;
  req.session.username = null;
  res.send( '{"status":200,"message":"logged out"}');
})
server.get("/getaccountinfo",(req,res) => {
  /*{"id":string,
  "token":string,
  "username":string,
  "password":hash} */
  if(!req.session.token) res.send(`{"status":401,"message":"unauthorized","id":"","username":""}`);
  else res.send(`{"status":200,"message":"ok","id":"${req.session.aid}","username":"${req.session.username}"}`);
})
/*Listening to websocket (Required for pushing pieces in real time)*/
/*Listening to express*/
/*Listen to port*/
http_server.listen(port, () => console.log(`Listening on port ${port}`));