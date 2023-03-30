// FirstName
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

// LastName
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

// Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

// Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

// Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

// Verification Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyverifyPasswordError = document.getElementById("empty-verify-password");

// Submit
let submitButton = document.getElementById("submit-button");

// valid
let validClasses = document.getElementsByClassName("valid");
let invaildClasses = document.getElementsByClassName("error");

// Password Verification
const passwordVerify = (password) => {
    const regex = /^(?=.+[A-Z]) (?=.+[a-z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
    return regex.text(password) && password.length >=8;
};

// Text verification 
const textVerify = (text) => {
    const regex = /^[a-zA-z]{3,}$/;
   return regex.test(text);
};

// Phone number verification
const phoneVerify = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
};

// Email verification
const emailVerify = (input) => {
    const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
    return regex.text(input);
};

// For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
    inputReference,emptyErrorReference,otherErrorReference
) => {
    if (!inputReference.value) {
        // input is null/empty
        emptyErrorReference.classList.remove("hide");
        otherErrorReference.classList.add("hide");
        inputReference.classList.add("error");
    } else {
        //input has some content
        emptyErrorReference.classList.add("hide");
    }
};

// For Error Styling and displaying error message
const errorUpdate = (inputReference, errorReference) =>
{
    errorReference.classList.remove("hide");
    inputReference.classList.remove("valid");
    inputReference.classList.add("error");
};

// For no errors
const validInput = (inputReference) => {
    inputReference.classList.remove("error");
    inputReference.classList.add("valid");
};

// FirstName
firstNameInput.addEventListener("input", () => {
    if (textVerify(firstNameInput.value)){
        //If verification return true
        firstNameError.classList.add("hide");
        validInput(firstNameInput);
    } else {
        // for false
        errorUpdate(firstNameInput, firstNameError);
        //empty checker
        emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
    }
});

// LastName
lastNameInput.addEventListener("input", () => {
    if (textVerify(lastNameInput.value)){
        lastNameError.classList.add("hide");
        validInput(lastNameInput);
    } else {
        errorUpdate(lastNameInput, lastNameError);
        emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
    }
});

// Phone
phoneInput.addEventListener("input", () => {
    if (phoneVerify(phoneInput.value)){
        //If verification return true
        phoneError.classList.add("hide");
        validInput(phoneInput);
    } else {
        // for false
        errorUpdate(phoneInput, phoneError);
        //empty checker
        emptyUpdate(phoneInput, emptyphoneError,phoneError);
    }
});

// Email
emailInput.addEventListener("input", () => {
    if (emailVerify(emailInput.value)){
        //If verification return true
        emailError.classList.add("hide");
        vaildInput(emailInput);
    } else {
        // for false
        errorUpdate(emailInput, emailError);
        //empty checker
        emptyUpdate(emailInput, emptyEmailError,emailError);
    }
});

// password
passwordInput.addEventListener("input", () => {
    if (passwordVerify(Input.value)){
        //If verification return true
        passwordError.classList.add("hide");
        validInput(passwordInput);
    } else {
        // for false
        errorUpdate(passwordInput, emailError);
        //empty checker
        emptyUpdate(passwordInput, emptyPasswordError,passwordError);
    }
});

//Verify password
verifypasswordInput.addEventListener("input", () => {
    if (verifypasswordVerifyInput.value === passwordInput.value){
        //If verification return true
        verifyPasswordError.classList.add("hide");
        validInput(verifyPasswordInput);
    } else {
        // for false
        errorUpdate(verifyPasswordInput, verifyPasswordError);
        //empty checker
        emptyUpdate(passwordInput, emptyVerifyError, verifyPasswordError);
    }
});

// submit button
submitButton.addEventListener("click", () => {
    if (validClasses.length == 6 && invaildClasses.length == 0) {
        alert("Successfully submitted");
    } else {
        alert("Error");
    }
});









































