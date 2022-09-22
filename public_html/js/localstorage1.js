// if theres no item from local storage make a new storage item with value from url
if (!localStorage.getItem("nameStorage")) {
    localStorage.setItem("nameStorage", getUrlValue("name"));
}
if (!localStorage.getItem("passwordStorage")) {
    localStorage.setItem("passwordStorage", getUrlValue("password"));
}
    