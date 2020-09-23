const fname = document.getElementsByName("firstname")[0];
const fnameSpan = document.getElementById("firstnameSpan");
let fnameError = 1;

/**
 * @description Event Listener that listens to first name input field blur event and validate the first name field. First name is compulsary field, minumum of 2 char is required, it should contain only alphabets.
 * @param {event} event The event object that fires on firstname input field.
 * @returns {void}
 */

fname.addEventListener("blur", (event) => {
  let regex = /^[a-zA-Z]+$/;
  if (fname.value.length === 0 || fname.value.length < 3) {
    fname.style.border = "1px solid red";
    fnameSpan.textContent = "Firstname is compulsary and must be min 2 char";
    fnameSpan.style.visibility = "visible";
    fnameSpan.style.color = "red";
    fnameError = 1;
  } else if (!regex.test(fname.value)) {
    fname.style.border = "1px solid red";
    fnameSpan.textContent = "Firstname should contain only alphabets";
    fnameSpan.style.visibility = "visible";
    fnameSpan.style.color = "red";
    fnameError = 1;
  } else {
    fname.style.border = "1px solid black";
    fnameSpan.style.visibility = "hidden";
    fnameError = 0;
  }
});

const lname = document.getElementsByName("lastname")[0];
const lnameSpan = document.getElementById("lastnameSpan");
let lnameError = 1;

/**
 * @description Event Listener that listens to last name input field blur event and validate the last name field. Last name is compulsary field, minumum of 2 char is required, it should contain only alphabets.
 * @param {event} event The event object that fires on lastname input field.
 * @returns {void}
 */

lname.addEventListener("blur", (event) => {
  let regex = /^[a-zA-Z]+$/;
  if (lname.value.length === 0 || lname.value.length < 3) {
    lname.style.border = "1px solid red";
    lnameSpan.textContent = "Lastname is compulsary and must be min 2 char";
    lnameSpan.style.visibility = "visible";
    lnameSpan.style.color = "red";
    lnameError = 1;
  } else if (!regex.test(lname.value)) {
    lname.style.border = "1px solid red";
    lnameSpan.textContent = "Lastname should contain only alphabets";
    lnameSpan.style.visibility = "visible";
    lnameSpan.style.color = "red";
    lnameError = 1;
  } else {
    lname.style.border = "1px solid black";
    lnameSpan.style.visibility = "hidden";
    lnameError = 0;
  }
});

const phone = document.getElementsByName("phone")[0];
const phoneSpan = document.getElementById("phoneSpan");
let phoneError = 1;

/**
 * @description Event Listener that listens to phone number input field blur event and validate the phone number field. Phone number field is required, must contain 10 digit number only.
 * @param {event} event The event object that fires on Phone number input field.
 * @returns {void}
 */

phone.addEventListener("blur", (event) => {
  var phoneno = /^\d{10}$/;

  let firstDigit = parseInt(phone.value[0]);

  if (phone.value.length === 0) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "Phone number is compulsary";
    phoneSpan.style.visibility = "visible";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else if (isNaN(phone.value)) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "It should contain number only";
    phoneSpan.style.visibility = "visible";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else if (!phone.value.match(phoneno)) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "Please enter valid number";
    phoneSpan.style.visibility = "visible";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else if (firstDigit < 6) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "First digit of number is not valid";
    phoneSpan.style.visibility = "visible";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else {
    phone.style.border = "1px solid black";
    phoneSpan.style.visibility = "hidden";
    phoneError = 0;
  }
});

const office = document.getElementsByName("office")[0];
const officeSpan = document.getElementById("officeSpan");
let officeError = 0;

/**
 * @description Event Listener that listens to office number input field blur event and validate the office number field. Office number field is required and minimum of 8 digit is needed.
 * @param {event} event The event object that fires on office number input field.
 * @returns {void}
 */

office.addEventListener("blur", (event) => {
  if (office.value.length === 0 || office.value.length < 7) {
    office.style.border = "1px solid red";
    officeSpan.textContent = "Office number is compulsary and min 8 digit";
    officeSpan.style.visibility = "visible";
    officeSpan.style.color = "red";
    officeError = 1;
  } else if (isNaN(office.value)) {
    office.style.border = "1px solid red";
    officeSpan.textContent = "It should contain number only";
    officeSpan.style.visibility = "visible";
    officeSpan.style.color = "red";
    officeError = 1;
  } else {
    office.style.border = "1px solid black";
    officeSpan.style.visibility = "hidden";
    officeError = 0;
  }
});

const email = document.getElementsByName("email")[0];
const emailSpan = document.getElementById("emailSpan");
let emailError = 1;

/**
 * @description Event Listener that listens to email input field blur event and validate the email field. Email field is required, must start with alphanumeric char or underscore or dot or hiphen and then @ must be present. After that at least one char and at the end dot with one or more character
 * @param {event} event The event object that fires on on Email field.
 * @returns {void}
 */

email.addEventListener("blur", (event) => {
  if (email.value.length === 0) {
    email.style.border = "1px solid red";
    emailSpan.textContent = "Email field is compulsary";
    emailSpan.style.visibility = "visible";
    emailSpan.style.color = "red";
    emailError = 1;
  } else if (1) {
    const regex = /^[A-Za-z0-9+_.-]+@(\w+)(\.\w+)$/;
    if (!regex.test(email.value)) {
      email.style.border = "1px solid red";
      emailSpan.textContent = "Please enter valid Email";
      emailSpan.style.visibility = "visible";
      emailSpan.style.color = "red";
      emailError = 1;
    } else {
      email.style.border = "1px solid black";
      emailSpan.style.visibility = "hidden";
      emailError = 0;
    }
  }
});

const password = document.getElementsByName("password")[0];
const passwordSpan = document.getElementById("passwordSpan");
let passwordError = 1;

const cPassword = document.getElementsByName("cPassword")[0];
const cPasswordSpan = document.getElementById("cPasswordSpan");
cPassword.disabled = true;
let cPasswordError = 1;
/**
 * @description Event Listener that listens to password input field blur event and validate the password field. That must be compulsary, Characters must be in the range 8 to 12 with no special characters and it should be only alphanumeric char.
 * @param {event} event The event object that fires on Password input field.
 * @returns {void}
 */

password.addEventListener("blur", (event) => {
  const regex = /^[A-Za-z0-9_]+$/;
  if (password.value.length === 0) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password is compulsary";
    passwordSpan.style.visibility = "visible";
    passwordSpan.style.color = "red";
    cPassword.disabled = true;
    passwordError = 1;
  } else if (password.value.length < 8 || password.value.length > 12) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password should be between 8 and 12 char";
    passwordSpan.style.visibility = "visible";
    passwordSpan.style.color = "red";
    cPassword.disabled = true;
    passwordError = 1;
  } else if (!regex.test(password.value)) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password should contain only Alphanumeric Char";
    passwordSpan.style.visibility = "visible";
    passwordSpan.style.color = "red";
    cPassword.disabled = true;
    passwordError = 1;
  } else {
    password.style.border = "1px solid black";
    passwordSpan.style.visibility = "hidden";
    cPassword.disabled = false;
    passwordError = 0;
  }
});

/**
 * @description Event Listener that listens to confirm password input field blur event and validate the input field.Must be compulsary and must be same as password field.
 * @param {event} event The event object that fires on Confirm Password input field.
 * @returns {void}
 */

cPassword.addEventListener("blur", (event) => {
  if (cPassword.value.length === 0) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Confirm password is compulsary";
    cPasswordSpan.style.visibility = "visible";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  } else if (cPassword.value !== password.value) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Should be exactly same as Password";
    cPasswordSpan.style.visibility = "visible";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  } else {
    cPassword.style.border = "1px solid black";
    cPasswordSpan.style.visibility = "hidden";
    cPasswordError = 0;
  }
});

const month = document.getElementsByName("month")[0];
const day = document.getElementsByName("day")[0];
const year = document.getElementsByName("year")[0];
const dobUl = document.getElementsByClassName("dob_fileds")[0];
const dobSpan = document.getElementById("dobSpan");
const ageField = document.getElementsByName("age")[0];
let dobError = 0;

/**
 * @description Event Listener that listens to date of birth input field click event and validate the form. Date of birth with date, month, year required.
 * @param {event} event The event object that fires on Date of birth parent div.
 * @returns {void}
 */

dobUl.addEventListener("click", (event) => {
  if (month.value !== "month" && day.value !== "day" && year.value !== "year") {
    dobSpan.style.visibility = "hidden";
    dobError = 0;

    let age;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    monthDiff = mm - parseInt(month.value);
    if (monthDiff < 0) {
      monthDiff += 12;
    }

    if (mm - parseInt(month.value) < 0) {
      age = yyyy - parseInt(year.value) - 1;
    } else {
      age = yyyy - parseInt(year.value);
    }
    if (monthDiff !== 12) {
      age = age + "." + monthDiff;
    }

    if (parseFloat(monthDiff > 9)) {
      ageField.value = parseFloat(age).toFixed(2);
    } else {
      ageField.value = parseFloat(age);
    }
  }
});

const radio = document.getElementsByName("radio");
const radioSpan = document.getElementById("radioSpan");
let radioError = 1;

const aboutYou = document.getElementsByName("aboutYou")[0];
const aboutYouSpan = document.getElementById("aboutYouSpan");
let aboutError = 1;

/**
 * @description Event Listener that listens to about you input field blur event and validate the about you input field. It is compulsary field.
 * @param {event} event The event object that fires on About you text field.
 * @returns {void}
 */

aboutYou.addEventListener("blur", (event) => {
  if (aboutYou.value.length === 0) {
    aboutYouSpan.textContent = "About You is compulsary";
    aboutYouSpan.style.visibility = "visible";
    aboutYouSpan.style.color = "red";
    aboutYou.style.border = "1px solid red";
    aboutError = 1;
  } else {
    aboutYouSpan.style.visibility = "hidden";
    aboutYou.style.border = "1px solid gray";
    aboutError = 0;
  }
});

/**
 * @description This function gets called when we click on submit form. Validate Each input field that is required.
 * @param {event} event The event object that fires on form i.e submit.
 * @returns {boolean} return true or false based on validation.
 */

function validateMe(event) {
  let interestError = 1;
  const interestSpan = document.getElementById("interestSpan");

  if (fname.value.length === 0) {
    fname.style.border = "1px solid red";
    fnameSpan.textContent = "Firstname field is compulsary";
    fnameSpan.style.visibility = "visible";
    fnameSpan.style.color = "red";
    fnameError = 1;
  }

  if (lname.value.length === 0) {
    lname.style.border = "1px solid red";
    lnameSpan.textContent = "Lastname field is compulsary";
    lnameSpan.style.visibility = "visible";
    lnameSpan.style.color = "red";
    lnameError = 1;
  }

  if (phone.value.length === 0) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "Phone number is compulsary";
    phoneSpan.style.visibility = "visible";
    phoneSpan.style.color = "red";
    phoneError = 1;
  }

  if (office.value.length === 0) {
    office.style.border = "1px solid red";
    officeSpan.textContent = "Office number is compulsary";
    officeSpan.style.visibility = "visible";
    officeSpan.style.color = "red";
    officeError = 1;
  }

  if (email.value.length === 0) {
    email.style.border = "1px solid red";
    emailSpan.textContent = "Email field is compulsary";
    emailSpan.style.visibility = "visible";
    emailSpan.style.color = "red";
    emailError = 1;
  }

  if (password.value.length === 0) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password field is compulsary";
    passwordSpan.style.visibility = "visible";
    passwordSpan.style.color = "red";
    cPassword.disabled = true;
    passwordError = 1;
  }

  if (cPassword.value.length === 0) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Confirm Password is compulsary";
    cPasswordSpan.style.visibility = "visible";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  } else if (cPassword.value !== password.value) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Confirm Password must be same as Password";
    cPasswordSpan.style.visibility = "visible";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  }

  if (month.value === "month" || day.value === "day" || year.value === "year") {
    dobSpan.textContent = "Date of birth is compulsary";
    dobSpan.style.visibility = "visible";
    dobSpan.style.color = "red";
    dobError = 1;
  }

  if (aboutYou.value.length === 0) {
    aboutYouSpan.textContent = "About You field is compulsary";
    aboutYouSpan.style.color = "red";
    aboutYouSpan.style.visibility = "visible";
    aboutYou.style.border = "1px solid red";
    aboutError = 1;
  }

  if (!radio[0].checked && !radio[1].checked) {
    radioSpan.textContent = "Please Select a gender";
    radioSpan.style.color = "red";
    radioSpan.style.visibility = "visible";
    radioError = 1;
  } else {
    radioSpan.style.visibility = "hidden";
    radioError = 0;
  }

  var form_data = new FormData(document.querySelector("form"));

  if (form_data.getAll("interest[]").length > 0) {
    interestSpan.style.visibility = "hidden";
    interestError = 0;
  } else {
    interestSpan.textContent = "Please select at least one type of interest";
    interestSpan.style.visibility = "visible";
    interestSpan.style.color = "red";
    interestError = 1;
  }

  if (
    fnameError ||
    lnameError ||
    phoneError ||
    officeError ||
    emailError ||
    passwordError ||
    cPasswordError ||
    dobError ||
    radioError ||
    interestError ||
    aboutError
  ) {
    return false;
  }

  return true;
}
