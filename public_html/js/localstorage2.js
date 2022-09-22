//if theres item in local storage print it if theres non print value from url
if (localStorage.getItem("nameStorage")) {
    var printName = localStorage.getItem("nameStorage");
    document.getElementById("name").innerHTML = printName;
} else {
    document.getElementById("name").innerHTML = getUrlValue("name");
}


if (localStorage.getItem("passwordStorage")) {
    var printPassword = localStorage.getItem("passwordStorage");
    document.getElementById("password").innerHTML = printPassword;
} else {
    document.getElementById("password").innerHTML = getUrlValue("password");
}
        