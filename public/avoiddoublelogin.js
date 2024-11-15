checklogin().then(isLoggedIn => {
    if(isLoggedIn == true) window.location.href = "/account.html";
});