// if theres no item from local storage make a new storage item with value from url
if (!localStorage.getItem("titleStorage")) {
    localStorage.setItem("titleStorage", getUrlValue("title"));
}
if (!localStorage.getItem("directorStorage")) {
    localStorage.setItem("directorStorage", getUrlValue("director"));
}
if (!localStorage.getItem("yearStorage")) {
    localStorage.setItem("yearStorage", getUrlValue("year"));
}
if (!localStorage.getItem("adultStorage")) {
    localStorage.setItem("adultStorage", getUrlValue("adult"));
}
if (!localStorage.getItem("title-typeStorage")) {
    localStorage.setItem("title-typeStorage", getUrlValue("title-type"));
}


if (!localStorage.getItem("cast1Storage")) {
    localStorage.setItem("cast1Storage", getUrlValue("cast1"));
}
if (!localStorage.getItem("cast2Storage")) {
    localStorage.setItem("cast2Storage", getUrlValue("cast2"));
}
if (!localStorage.getItem("cast3Storage")) {
    localStorage.setItem("cast3Storage", getUrlValue("cast3"));
}

  


