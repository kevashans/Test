function isNameValid() {
    if (document.getElementById("name").value.length === 0) {
        document.getElementById("nameErrorMessage").innerHTML = "\u2022 Please enter a valid username";
        document.getElementById("nameErrorMessage").className = "appear";
        
        return false;
    } else {
        document.getElementById("nameErrorMessage").innerHTML = "";
        document.getElementById("nameErrorMessage").className = "hide";
        return true;
    }


}

function isPasswordValid() {
    let pattern = /^.{8,}$/;
    if (pattern.test(document.getElementById("password").value) === false) {
        document.getElementById("passwordErrorMessage").innerHTML = "\u2022 Enter a valid password";
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
    let nameIsValid = isNameValid();
    let passwordIsValid = isPasswordValid();
    

    /* If ALL of the element validation functions pass, then the form is valid */
    if (nameIsValid && passwordIsValid)
    {
        return true;
        
    } else /* If ANY of the element validation functions fail, then the form fails */
    {
       document.getElementById("error").innerHTML = "One or more of the fields are incorrect";
       
       return false;
    }
}
