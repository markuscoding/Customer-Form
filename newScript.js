  // Declaring variable 
  const form = document.getElementById('form');
  const reset = document.getElementById('Reset');
  const input = document.querySelectorAll('input');
  const lastname = document.getElementById('lastName');
  const firstname = document.getElementById('firstName');
  const phonenumber = document.getElementById('phoneNumber');
  const email = document.getElementById('email');
  const address1 = document.getElementById('address1');
  const lotNumber = document.getElementById('lotNumber');
  const country = document.getElementById('country');
  const password1 = document.getElementById('password');
  const passwordCheck = document.getElementById('passwordCheck');


// Reset Validation 

reset.addEventListener('click', () => {
   input.forEach(input => input.value = '');
})

// Form Validation Function
function validateForm() {
  // Last Name 
  var lastName = document.forms["frmContact"]["lastName"].value;
  if (lastName == "") {
    setErrorFor(lastname, 'Last Name is required')
  }
  else if(!lettersOnly(lastName)){
    setErrorFor(lastname,'Last name is not valid')
    alert('Last name is not valid');
  }
  else{
    setSuccessFor(lastname);
  }

  // First Name 
  var firstName = document.forms["frmContact"]["firstName"].value;
      if(firstName == ""){
      setErrorFor(firstname,'First Name is required') 
  }
  else if(!lettersOnly(firstName)){
    setErrorFor(firstname,'First Name is not valid')
    alert('First Name is not valid');
  }
  else{
    setSuccessFor(firstname);
  }


  // Phone Number
  var phoneNumber = document.forms["frmContact"]["phoneNumber"].value;
    if(phoneNumber == ""){
    setErrorFor(phonenumber,'Phone Number is required')
  }
  else if(!isPhone(phoneNumber)){
    setErrorFor(phonenumber,'Phone number is not valid')
    alert('Phone number is not valid');
  }
  else{
    setSuccessFor(phonenumber);
  }

  // Email Address
  var Email = document.forms["frmContact"]["email"].value;
    if(Email == ""){
    setErrorFor(email,'Email Address is required')
  }
  else if (!isEmail(Email)){
    setErrorFor(email,'Email Address is not valid')
    alert('Email Address is not valid');
  }
  else{
      setSuccessFor(email);
  }

  // Home Address
  var address = document.forms["frmContact"]["address1"].value;
    if(address == ""){
    setErrorFor(address1,'Home Address is required')
  }
  else{
    setSuccessFor(address1);
  }

  // House Number
  var lotNumber1 = document.forms["frmContact"]["lotNumber"].value;
  if(lotNumber1 == ""){
  setErrorFor(lotNumber,'House Number is required')
  }  
  else{
      setSuccessFor(lotNumber);
  }

  // Province
    var province = document.forms["frmContact"]["country"].value;
    if(province == ""){
    setErrorFor(country,'Province is required')
    }
    else{
      setSuccessFor(country);
    }


  // Password
    var password1 = document.forms["frmContact"]["password"].value;
    if(password1 == ""){
    setErrorFor(password,'Password is required')
    }
    else{
      setSuccessFor(password);
    }
    
  // Confirm Password
    var passwordChecks = document.forms["frmContact"]["passwordCheck"].value;
    if(passwordChecks == ""){
      setErrorFor(passwordCheck,'Confirm Password is required')
      return false;
    }
  }

// Set function for Error
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;
  
    formControl.className = 'form-control error';
}

// Set function for Success
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }

 // last name capitalization
  document.getElementById("lastName").addEventListener("focusout", function(){
    var lastName = document.getElementById("lastName");
    lastName.value = lastName.value.toUpperCase();
  });

  // first name capitalization
  document.getElementById("firstName").addEventListener("focusout", function(){
    var firstName = document.getElementById("firstName");
    firstName.value = firstName.value.toUpperCase();
  });

// First name Last Name is required to put Letters Only and Length is not greater than 15 letters
  function lettersOnly(){
  var inputLast = document.getElementById("lastName");
  var inputFirst = document.getElementById("firstName");
  var lettersOnly = /^[a-zA-Z]+$/;
  if(inputLast.value.match(lettersOnly)){
    return(lastname)
  }
  if(inputFirst.value.match(lettersOnly)){
    return(firstname)
  }
  if(inputLast.value.length >= 15){
    return(lastname)
  }
  if(inputFirst.value.length >= 15){
    return(firstname)
  }
  };

// phone validation
  function isPhone(){
  var inputPhone = document.getElementById("phoneNumber");
  var  phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(inputPhone.value.match(phoneFormat)){
    return(phonenumber)
  }
  };

// checking email if valid or not valid
  function isEmail(){
    var inputEmail = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputEmail.value.match(mailformat)){
        return(email)
    }
  };


// password validation
let timeout;
let timeout2;
let password = document.getElementById("password");
let strengthBadge = document.getElementById("StrengthDisp");
let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{16,})");
let mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{16,}))");

// function to check the password strength
function StrengthChecker(PasswordParameter) {
  if(strongPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = "green";
      strengthBadge.style.textAlign ="center";
      strengthBadge.textContent = 'Strong';
  } else if(mediumPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = 'blue';
      strengthBadge.style.textAlign ="center";
      strengthBadge.textContent = 'Medium';
  } else {
      strengthBadge.style.backgroundColor = 'red';
      strengthBadge.style.textAlign ="center";
      strengthBadge.textContent = 'Weak';
  }
}

password.addEventListener("input", () => {

  //The badge is hidden by default, so we show it   
  strengthBadge.style.display = 'block';
  clearTimeout(timeout);

  //We then call the StrengChecker function as a callback then pass the typed password to it
  timeout = setTimeout(() => StrengthChecker(password.value), 200);

  //Incase a user clears the text, the badge is hidden again
  if(password.value.length !== 0) {
      strengthBadge.style.display != 'block';
  } else {
      strengthBadge.style.display = 'none';
  }
});

// password check for all the parameters

digits = document.getElementById("digits");
symbol = document.getElementById("symbol");
capital = document.getElementById("capital");
number = document.getElementById("number");

password.addEventListener("input", function(){
  checkPasswordParameters(password.value);

  //The badge is hidden by default, so we show it   
  passwordRequirement.style.display = 'block';
  clearTimeout(timeout2);

  //We then call the StrengChecker function as a callback then pass the typed password to it
  timeout2 = setTimeout(() => checkPassword(), 200);

  //Incase a user clears the text, the badge is hidden again
  if(password.value.length !== 0) {
    passwordRequirement.style.display != 'block';
  } else {
    passwordRequirement.style.display = 'none';
  }
});

function checkPasswordParameters(password) {
  if (password.length > 16) {
    digits.style.color = "green";
    digits.style.fontWeight = 700;
  }
  if (password.match(/[A-Z]+/)) {
    capital.style.color = "green";
    capital.style.fontWeight = 700;
  }
  if (password.match(/[0-9]+/)) {
    number.style.color = "green";
    number.style.fontWeight = 700;
  }
  if (password.match(/[$@#&!]+/)) {
    symbol.style.color = "green";
    symbol.style.fontWeight = 700;
  }
}
// password match checker
let confirmPassword = document.getElementById("passwordCheck");
let confirmBadge = document.getElementById("confirmBadge");

// check if the password match or not and change colors accordingly
function checkPassword() {
  if(password.value==confirmPassword.value) {
    confirmBadge.style.backgroundColor = "green";
    confirmBadge.style.textAlign = "center";
    confirmBadge.textContent = 'Passwords Match';
  } else {
    confirmBadge.style.backgroundColor = 'red';
    confirmBadge.style.textAlign = "center";
    confirmBadge.textContent = 'Passwords Do Not Match';
  }
}
confirmPassword.addEventListener("input", () => {

  //The badge is hidden by default, so we show it   
  confirmBadge.style.display = 'block';
  clearTimeout(timeout);

  //We then call the StrengChecker function as a callback then pass the typed password to it
  timeout = setTimeout(() => checkPassword(), 200);

  //Incase a user clears the text, the badge is hidden again
  if(confirmPassword.value.length !== 0) {
    confirmBadge.style.display != 'block';
  } else {
    confirmBadge.style.display = 'none';
  }
});






//  form.addEventListener('onclick',(e) =>{
//     e.preventDefault();

//     checkInputs();
// });




// function checkInputs(){
//      const lastNameValue = lastname.value.trim();
//     const firstNameValue = firstname.value.trim();
//     const phoneNumberValue = phonenumber.value.trim();
//      const emailValue = email.value.trim();
//      const address1Value = address1.value.trim();
//      const lotNumberValue = lotNumber.value.trim();
//      const countryValue = country.value.trim();
//     const passwordValue = password.value.trim();
//     const passwordCheckValue = passwordCheck.value.trim();

//     // validation for Lastname
//     if(lastNameValue === ""){
//         setErrorFor(lastname, 'Last Name is required')
//     }
//     else{
//         setSuccessFor(lastname);
//     }


//   // validation for firstname
//     if(firstNameValue === ""){
//         setErrorFor(firstname,'First Name is required')
//     }
//     else{
//         setSuccessFor(firstname);
//     }


//     // validation for phonenumber
//     if(phoneNumberValue === ""){
//         setErrorFor(phoneNumber,'Phone Number is required')
//     }
//     else{
//         setSuccessFor(phoneNumber);
//     }

//     // validation for email
//     if(emailValue === ""){
//         setErrorFor(email,'Email Address is required')
//     }
//     else if (!isEmail(emailValue)){
//         setErrorFor(email,'Email Address is not valid')
//     }
//     else{
//         setSuccessFor(email);
//     }

//     // validation for home address
//     if(address1Value === ""){
//         setErrorFor(address1,'Home Address is required')
//     }
//     else{
//         setSuccessFor(address1);
//     }

//     // validation for house number
//     if(lotNumberValue === ""){
//         setErrorFor(lotNumber,'House Number is required')
//     }
//     else{
//         setSuccessFor(lotNumber);
//     }

//     if(countryValue === ""){
//         setErrorFor(country,'Provice is Required')
//     }
//     else{
//         setSuccessFor(country);
//     }

//     // validation for password
//     if(passwordValue === ""){
//         setErrorFor(password,'Password is required')
//     }
//     else{
//         setSuccessFor(password);
//     }

//     // validation for confirmation password
//     if(passwordCheckValue === ""){
//         setErrorFor(passwordCheck,'Password is required')
//     }
//     else{
//         setSuccessFor(passwordCheck);
//     }


// ;}