function getUrlValue(urlParameterName)
{
    let searchString = window.location.search.substring(1);// original name=Kevas+Hans+Christian+Wihanto&address=Dublin+road&telephone=0873596651
    let urlParameters = searchString.split("&"); //this in list form (without and) name=Kevas+Hans+Christian+Wihanto, address=Dublin+road, telephone=0873596651

    // for each url parameter
    for (let i = 0; i < urlParameters.length; i++)
    {
        let keyValuePair = urlParameters[i].split("=");// not list form (0) name, Kevas+Hans+Christian+Wihanto

        // if the parameter name exists
        if (keyValuePair[0] === urlParameterName) //ask later
        {
            // replace escape codes with text for spaces and new line
            keyValuePair[1] = keyValuePair[1].replace(/\+/g, " ");
            keyValuePair[1] = keyValuePair[1].replace(/%0D%0A/g, "\n");

            return keyValuePair[1];

        }
    }
}
function isTitleValid() {
    if (document.getElementById("title").value.length === 0) {
        document.getElementById("titleErrorMessage").innerHTML = "*please enter title";
        return false;
    } else {
        document.getElementById("titleErrorMessage").innerHTML = "";

        return true;
    }


}
function isDirectorValid() {
    if (document.getElementById("director").value.length === 0) {
        document.getElementById("directorErrorMessage").innerHTML = "*please enter director name";
        return false;
    } else {
        document.getElementById("directorErrorMessage").innerHTML = "";

        return true;
    }


}
function isCastValid() {
    let pattern = /^[A-Za-z]+$/;
    if (pattern.test(document.getElementById("cast1").value) === false && pattern.test(document.getElementById("cast2").value) === false && pattern.test(document.getElementById("cast3").value) === false) {
        document.getElementById("castErrorMessage").innerHTML = "*please enter at least one valid Cast";
        return false;
    } else {
        document.getElementById("castErrorMessage").innerHTML = "";
        return true;
    }


}
function isYearValid() {
    let pattern = /^(199\d|200\d|2020)$/;
    if (pattern.test(document.getElementById("year").value) === false) {
        document.getElementById("yearErrorMessage").innerHTML = "*year must be between 1990 - 2020";
        return false;
    } else {
        document.getElementById("yearErrorMessage").innerHTML = "";
        return true;
    }


}
function isPasswordValid() {
    let pattern = /^.{8,}$/;
    if (pattern.test(document.getElementById("password").value) === false) {
        document.getElementById("passwordErrorMessage").innerHTML = "Password need to" + "<br />" + "have eight characters";
        document.getElementById("passwordErrorMessage").className = "appear";

        return false;
    } else {
        document.getElementById("passwordErrorMessage").className = "hide";
        return true;
    }


}
function isFormValid()
{
    /* Validate all of the input elements */
    let titleIsValid = isTitleValid();
    let castIsValid = isCastValid();
    let directorIsValid = isDirectorValid();
    let yearIsValid = isYearValid();


    /* If ALL of the element validation functions pass, then the form is valid */
    if (titleIsValid && castIsValid && directorIsValid && yearIsValid)
    {
        return true;
    } else /* If ANY of the element validation functions fail, then the form fails */
    {
        return false;
    }
}