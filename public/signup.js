function signup()
{
    var username = document.getElementById("name_").value;
    var password = document.getElementById("password_").value;
    var passwordretype = document.getElementById("password__").value;
    if(!username && !password) document.getElementById("status").innerHTML = "Please fill up your username <br>and password!";
    if(!username && password) document.getElementById("status").innerHTML = "Please fill up your username!";
    if(username && !password) document.getElementById("status").innerHTML = "Please fill up your password!";
    if(password && passwordretype != password)  document.getElementById("status").innerHTML = "Retype password did not match.";
    if(username && password && (password == passwordretype))
    {
        document.getElementById("status").innerHTML = "Attempting to sign up...";
        fetch("http://localhost:3000/createaccount", {method: "POST",  headers: { "Content-Type": "application/json"}, "body":JSON.stringify({"username":username,"password":password})}).then(async res => {
            var data = await res.json();
            if(data.status == 200)
                { 
                    document.getElementById("status").innerHTML = "Successfully register your account!<br>Redirecting in 3 seconds...";
                    setTimeout(function() {
                        window.location.href = "/account.html";
                    },"3000")
                }
            if(data.status == 401) document.getElementById("status").innerHTML = "Account with that username already exists!";
        }).catch(err => document.getElementById("status").innerHTML = err);
    }
}