//url.searchParams.append("param1", "value1");
//url.searchParams.append("param2", "value2");
checklogin().then(isLoggedIn => {
    if(isLoggedIn == false) window.location.href="/login.html";
});