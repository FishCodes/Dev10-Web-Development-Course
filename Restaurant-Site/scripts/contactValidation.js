/*
Name: Stephen Fishbune
Date Created: 5/7/2019
Most recent revision:

Description: Validates that there was input in required fields of contact form
*/

function validateForm() {
    var name = document.forms["contactUs"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        document.forms["contactUs"]["name"].focus();
        return false;
    }
    var email = document.forms["contactUs"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        document.forms["contactUs"]["email"].focus();
        return false;
    }
    var phone = document.forms["contactUs"]["phone"].value;
    if (phone == "") {
        alert("Phone number must be filled out");
        document.forms["contactUs"]["phone"].focus();
        return false;
    }

    //Not actually submitting anywhere
    alert("All required information was submitted successfully.")
    return false;
}