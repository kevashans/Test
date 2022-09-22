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
function clearData() {
    localStorage.removeItem("nameStorage");
    localStorage.removeItem("passwordStorage");
}
function clearMovieData(){
    localStorage.removeItem("titleStorage");
    localStorage.removeItem("directorStorage");
    localStorage.removeItem("title-typeStorage");
    localStorage.removeItem("cast1Storage");
    localStorage.removeItem("cast2Storage");
    localStorage.removeItem("cast3Storage");
    localStorage.removeItem("adultStorage");
    localStorage.removeItem("genreStorage");
    localStorage.removeItem("yearStorage");
    
    
}
//%0D is a carriage return character
//%0A is a line break character
// g means global
// /\ replace whitespace
