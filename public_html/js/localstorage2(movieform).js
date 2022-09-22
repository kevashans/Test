//if theres item in local storage print it if theres non print value from url
if (localStorage.getItem("titleStorage")) {
    var printName = localStorage.getItem("titleStorage");
    document.getElementById("title").innerHTML = printName;
} else {
    document.getElementById("title").innerHTML = getUrlValue("title");
}


if (localStorage.getItem("directortorage")) {
    var printPassword = localStorage.getItem("directorStorage");
    document.getElementById("director").innerHTML = printPassword;
} else {
    document.getElementById("director").innerHTML = getUrlValue("director");
}



if (localStorage.getItem("yearStorage")) {
    var printPassword = localStorage.getItem("yearStorage");
    document.getElementById("year").innerHTML = printPassword;
} else {
    document.getElementById("year").innerHTML = getUrlValue("year");
}


if (localStorage.getItem("adultStorage")) {
    var printPassword = localStorage.getItem("adultStorage");
    document.getElementById("adult").innerHTML = printPassword;
} else {
    document.getElementById("adult").innerHTML = getUrlValue("adult");
}

if (localStorage.getItem("title-typeStorage")) {
    var printPassword = localStorage.getItem("title-typeStorage");
    document.getElementById("title-type").innerHTML = printPassword;
} else {
    document.getElementById("title-type").innerHTML = getUrlValue("title-type");
}

if (localStorage.getItem("cast1Storage")) {
    var printPassword = localStorage.getItem("cast1Storage");
    document.getElementById("cast1").innerHTML = printPassword;
} else {
    document.getElementById("cast1").innerHTML = getUrlValue("cast1");
}

if (localStorage.getItem("cast2Storage")) {
    var printPassword = localStorage.getItem("cast2Storage");
    document.getElementById("cast2").innerHTML = printPassword;
} else {
    document.getElementById("cast2").innerHTML = getUrlValue("cast2");
}

if (localStorage.getItem("cast3Storage")) {
    var printPassword = localStorage.getItem("cast3Storage");
    document.getElementById("cast3").innerHTML = printPassword;
} else {
    document.getElementById("cast3").innerHTML = getUrlValue("cast3");
}


var printGenre = localStorage.getItem("genreStorage");
document.getElementById("genre").innerHTML = printGenre;