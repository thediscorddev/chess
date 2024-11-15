function login()
{
    var username = document.getElementById("name_").value;
    var password = document.getElementById("password_").value;
    if(!username && !password) document.getElementById("status").innerHTML = "Please fill up your username <br>and password!";
    if(!username && password) document.getElementById("status").innerHTML = "Please fill up your username!";
    if(username && !password) document.getElementById("status").innerHTML = "Please fill up your password!";
    console.log(username);
    if(username && password)
    {
        document.getElementById("status").innerHTML = "Attempting to login...";
        fetch("http://localhost:3000/login", {method: "POST",  headers: { "Content-Type": "application/json"}, "body":JSON.stringify({"username":username,"password":password})}).then(async res => {
            var data = await res.json();
            if(data.status == 200) {
                document.getElementById("status").innerHTML = "Successfully log you in!<br>redirecting in 3 seconds...";
                setTimeout(function() {
                    window.location.href = "/account.html";
                },"3000")

            }
            if(data.status == 401) document.getElementById("status").innerHTML = "Invalid username or password!";
        }).catch(err => document.getElementById("status").innerHTML = err);
    }
}