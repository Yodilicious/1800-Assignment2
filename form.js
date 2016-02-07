/* JavaScript
 * A2JodiVisser
 *
 *  Description: A JavaScript program that captures data in a form
 *
 * Revision History
 *      Jodi Visser, 2016.02.11: Created
 */

//Methods that validate the fields
var errorMessage;
function validateFirstName()
{
    var fName = document.getElementById('fname').value;
    //onblur:"this.value = this.value.substr(0, 1).toUpperCase() + this.value.substr(1);"
    if(!fName)
    {
        document.getElementById('validation_name').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your First Name</div>";
        document.getElementById('fname').focus();
        return false;
    }
    else
    {
        document.getElementById('lname').focus();  
        return true;
    } 
    console.log(fName);
} 

function validateLastName()
{
    var lName = document.getElementById('lname').value;
    if(!lName)
    {
        document.getElementById('validation_name').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Last Name</div>";
        document.getElementById('lname').focus();
        return false;
    }
    else
    {
        document.getElementById('city').focus();  
        return true;
    } 
    console.log(lName);
} 

function validateCity()
{
    var city = document.getElementById('city').value;
    if(!city)
    {
        document.getElementById('validation_city').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your City</div>";
        document.getElementById('city').focus();
        return false;
    }
    if(city.length < 3)
    {
        document.getElementById('validation_city').innerHTML = "City must be at least 3 characters long.";
        return false;
    }
    else
    {
        document.getElementById('postal_code').focus(); 
        return true; 
    } 
    console.log(city);
} 

function validatePostalCode()
{
    var postalCode = document.getElementById('postal_code').value.toUpperCase();
    if(!postalCode)
    {
        document.getElementById('validation_postal').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Postal Code</div>";
        document.getElementById('postal_code').focus();
        return false;
    }
    else
    {
        document.getElementById('username').focus();  
        return true;
    } 
    console.log(postalCode);
} 

function validateUserName()
{
    var userName = document.getElementById('username').value;
    if(!userName)
    {
        document.getElementById('validation_username').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Username</div>";
        document.getElementById('username').focus();
        return false;
    }
    else
    {
        document.getElementById('password').focus();  
        return true;
    } 
    console.log(userName);
} 

function validatePassword()
{
    var password = document.getElementById('password').value;
    if(!password)
    {
        document.getElementById('validation_password').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Password</div>";
        document.getElementById('password').focus();
        return false;
    }
    else
    {
        document.getElementById('confirm_password').focus();  
        return true;
    } 
    console.log(password);
} 

function validateConfirmPassword()
{
    var confirmPassword = document.getElementById('confirm_password').value;
    if(!confirmPassword)
    {
        document.getElementById('validation_confirm_password').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please confirm your Password</div>";
        document.getElementById('confirm_password').focus();
        return false;
    }
    else
    {
        document.getElementById('month').focus();  
        return true;
    } 
    console.log(confirmPassword);
} 

function validateBirthdayMonth()
{
    var month = document.getElementById('month').value;
    if(!month)
    {
        document.getElementById('validation_combobox_month').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter the Month of your birth date</div>";
        document.getElementById('month').focus();
        return false;
    }
    else
    {
        document.getElementById('birthdate_day').focus();
        return true;  
    } 
    console.log(month);
}

function validateBirthdayDay()
{
    var day = document.getElementById('birthdate_day').value;
    if(!day)
    {
        document.getElementById('validation_combobox_month').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter the Day of your birth date</div>";
        document.getElementById('birthdate_day').focus();
        return false;
    }
    else
    {
        document.getElementById('birthdate_year').focus(); 
        return true; 
    } 
    console.log(day);
} 

function validateBirthdayYear()
{
    var year = document.getElementById('birthdate_year').value;
    if(!year)
    {
        document.getElementById('validation_combobox_month').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter the Year of your birth date</div>";
        document.getElementById('birthdate_year').focus();
        return false;
    }
    else
    {
        document.getElementById('gender').focus(); 
        return true; 
    } 
    console.log(year);
} 

function validateGender()
{
    var gender = document.getElementById('gender').value;
    if(!gender)
    {
        document.getElementById('validation_combobox_gender').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Gender</div>";
        document.getElementById('gender').focus();
        return false;
    }
    else
    {
        document.getElementById('mobile_phone').focus();
        return true;  
    } 
    console.log(gender);
} 

function validateMobilePhone()
{
    var phone = document.getElementById('mobile_phone').value;
    if(!phone)
    {
        document.getElementById('validation_phone').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Mobile Phone Number</div>";
        document.getElementById('mobile_phone').focus();
        return false;
    }
    else
    {
        document.getElementById('current_email').focus();
        return true;  
    } 
    console.log(phone);
} 

function validateCurrentEmail()
{
    var currentEmail = document.getElementById('current_email').value;
    if(!currentEmail)
    {
       document.getElementById('validation__current_email').innerHTML = "You can't leave this empty.";
       document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Current Email Address</div>";
       document.getElementById('current_email').focus(); 
       return false;
    }
    else
    {
        document.getElementById('captia').focus();
        return true;  
    } 
    console.log(currentEmail);
} 

function validateCaptia()
{
    var captia = document.getElementById('captia').value;
    if(!captia)
    {
        document.getElementById('validation_captia').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter the characters displayed in the image</div>";
        document.getElementById('validation_captia').focus();
        return false;
    }
    else
    {
        document.getElementById('location').focus();
        return true;  
    } 
    console.log(captia);
} 

function validateLocation()
{
    var location = document.getElementById('location').value;
    if(!location)
    {
        document.getElementById('"validation_combobox_location"').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please enter your Countrye</div>";
        document.getElementById('location').focus();
        return false;
    }
    else
    {
        document.getElementById('agree').focus(); 
        return true; 
    } 
    console.log(location);
} 

function validateAgreement()
{
    var agreement = document.getElementById('agree').value;
    if(!agreement)
    {
        document.getElementById('"validation_checkbox_agree"').innerHTML = "You can't leave this empty.";
        document.getElementById("compound_error_message").innerHTML += "<div>Please Agree to the Google terms of service to submit the form</div>";
        document.getElementById('agree').focus();
        return false;
    }
    else
    {
        document.getElementById('agree').focus();
        return true;  
    } 
    console.log(location);
} 

function submit()
{
    if(!validateFirstName())
    {
        return false;
    }
    
    if(!validateLastName())
    {
        return false;
    }
    
    if(!validateCity())
    {
        return false;
    }
    
    if(!validatePostalCode())
    {
        return false;
    }
    
    if(!validateUserName())
    {
        return false;
    }
    
    if(!validatePassword())
    {
        return false;
    }
    
    if(!validateConfirmPassword())
    {
        return false;
    }
    
    if(!validateBirthdayMonth())
    {
        return false;
    }
    
    if(!validateBirthdayDay())
    {
        return false;
    }
    
    if(!validateBirthdayYear())
    {
        return false;
    }
    
    if(!validateGender())
    {
        return false;
    }
    
    if(!validateMobilePhone())
    {
        return false;
    }
    
    if(!validateCurrentEmail())
    {
        return false;
    }
    
    if(!validateCaptia())
    {
        return false;
    }
    
    if(!validateLocation())
    {
        return false;
    }
    
    if(!validateAgreement())
    {
        return false;
    }    
}

function focus() 
{
    document.getElementById('fname').focus();
}