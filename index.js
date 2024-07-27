/*Importing the required package*/
const db = new require('quick.db').QuickDB();
const server = require('express').express();
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocket = require('ws');
const port = 3000; // you may change it later
/*Setting up*/
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
const http_server = http.createServer(server);
const wss = new WebSocket.Server({ server:http_server });
/*Listening to websocket (Required for pushing pieces in real time)*/
/*Listening to express*/
/*Listen to port*/
http_server.listen(port, () => console.log(`Listening on port ${port}`));