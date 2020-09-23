const fname = $('input[name ="firstname"]');
const fnameSpan = $("#firstnameSpan");
let fnameError = 1;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to first name input field blur event and validate the first name field. First name field is compulsary, minumum of 2 char is required, it should contain only alphabets.
 * @param {event} event The event object that fires on firstname input field.
 * @returns {void}
 */

function fnameInitialCheck() {
  fname.css("border", "1px solid red");
  fnameSpan.text("Firstname is Compulsary and Must be min 2 char");
  fnameSpan.css({ visibility: "visible", color: "red" });
  fnameError = 1;
}

fname.blur(function (event) {
  let regex = /^[a-zA-Z]+$/;
  if (fname.val().length === 0 || fname.val().length < 3) {
    fnameInitialCheck();
  } else if (!regex.test(fname.val())) {
    fname.css("border", "1px solid red");
    fnameSpan.text("Firstname should contain only alphabets");
    fnameSpan.css({ visibility: "visible", color: "red" });
    fnameError = 1;
  } else {
    fname.css("border", "1px solid black");
    fnameSpan.css("visibility", "hidden");
    fnameError = 0;
  }
});

const lname = $('input[name ="lastname"]');
const lnameSpan = $("#lastnameSpan");
let lnameError = 1;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to last name input field blur event and validate the last name field. Last name should be compulsary, minumum of 2 char is required, it should contain only alphabets.
 * @param {event} event The event object that fires on lastname input field.
 * @returns {void}
 */

function lnameInitialCheck() {
  lname.css("border", "1px solid red");
  lnameSpan.text("Lastname is Compulsary and Must be min 2 char");
  lnameSpan.css({ visibility: "visible", color: "red" });
  lnameError = 1;
}

lname.blur(function (event) {
  let regex = /^[a-zA-Z]+$/;

  if (lname.val().length === 0 || lname.val().length < 3) {
    lnameInitialCheck();
  } else if (!regex.test(lname.val())) {
    lname.css("border", "1px solid red");
    lnameSpan.text("Lirstname should contain only alphabets");
    lnameSpan.css({ visibility: "visible", color: "red" });
    lnameError = 1;
  } else {
    lname.css("border", "1px solid black");
    lnameSpan.css("visibility", "hidden");
    lnameError = 0;
  }
});

const phone = $('input[name ="phone"]');
const phoneSpan = $("#phoneSpan");
let phoneError = 1;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to phone number input field blur event and validate the phone number field. Phone number field is required, must contain 10 digit number only.
 * @param {event} event The event object that fires on Phone number input field.
 * @returns {void}
 */

function phoneInitialCheck() {
  phone.css("border", "1px solid red");
  phoneSpan.text("Phone No is Compulsary");
  phoneSpan.css({ visibility: "visible", color: "red" });
  phoneError = 1;
}

phone.blur(function (event) {
  var phoneno = /^\d{10}$/;
  let firstDigit = parseInt(phone.val()[0]);

  if (phone.val().length === 0) {
    phoneInitialCheck();
  } else if (isNaN(phone.val())) {
    phone.css("border", "1px solid red");
    phoneSpan.text("It Should Contain Number Only");
    phoneSpan.css({ visibility: "visible", color: "red" });
    phoneError = 1;
  } else if (!phone.val().match(phoneno)) {
    phone.css("border", "1px solid red");
    phoneSpan.text("Please Enter Valid Number");
    phoneSpan.css({ visibility: "visible", color: "red" });
    phoneError = 1;
  } else if (firstDigit < 7) {
    phone.css("border", "1px solid red");
    phoneSpan.text("First digit is not valid");
    phoneSpan.css({ visibility: "visible", color: "red" });
    phoneError = 1;
  } else {
    phone.css("border", "1px solid black");
    phoneSpan.css("visibility", "hidden");
    phoneError = 0;
  }
});

const office = $('input[name ="office"]');
const officeSpan = $("#officeSpan");
let officeError = 0;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to office number input field blur event and validate the office number field. Office number field is required.
 * @param {event} event The event object that fires on office number input field.
 * @returns {void}
 */

function officeInitialCheck() {
  office.css("border", "1px solid red");
  officeSpan.text("Office number is compulsary and min 8 digit");
  officeSpan.css({ visibility: "visible", color: "red" });
  officeError = 1;
}

office.blur(function (event) {
  if (office.val().length === 0 || office.val().length < 7) {
    officeInitialCheck();
  } else if (isNaN(office.val())) {
    office.css("border", "1px solid red");
    officeSpan.text("It Should Contain Number Only");
    officeSpan.css({ visibility: "visible", color: "red" });
    officeError = 1;
  } else {
    office.css("border", "1px solid black");
    officeSpan.css("visibility", "hidden");
    officeError = 0;
  }
});

const email = $('input[name ="email"]');
const emailSpan = $("#emailSpan");
let emailError = 1;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to email input field blur event and validate the email field. Email field is required, must start with alphanumeric char or underscore or dot or hiphen and then @ must be present. After that at least one char and at the end dot with one or more character
 * @param {event} event The event object that fires on Email field.
 * @returns {void}
 */

function emailInitialCheck() {
  email.css("border", "1px solid red");
  emailSpan.text("Email is Compulsary");
  emailSpan.css({ visibility: "visible", color: "red" });
  emailError = 1;
}

email.blur(function (event) {
  if (email.val().length === 0) {
    emailInitialCheck();
  } else if (1) {
    const regex = /^[A-Za-z0-9+_.-]+@(\w+)(\.\w+)$/;
    if (!regex.test(email.val())) {
      email.css("border", "1px solid red");
      emailSpan.text("Please Enter Valid Email");
      emailSpan.css({ visibility: "visible", color: "red" });
      emailError = 1;
    } else {
      email.css("border", "1px solid black");
      emailSpan.css("visibility", "hidden");
      emailError = 0;
    }
  }
});

const password = $('input[name ="password"]');
const passwordSpan = $("#passwordSpan");
let passwordError = 1;

const cPassword = $('input[name ="cPassword"]');
const cPasswordSpan = $("#cPasswordSpan");
cPassword.prop("disabled", true);
let cPasswordError = 1;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to password input field blur event and validate the password field. That must be compulsary, Characters must be in the range 8 to 12 with no special character.
 * @param {event} event The event object that fires on Password input field.
 * @returns {void}
 */

function passwordInitialCheck() {
  password.css("border", "1px solid red");
  passwordSpan.text("Password is Compulsary");
  passwordSpan.css({ visibility: "visible", color: "red" });
  cPassword.prop("disabled", true);
  cPassword.val("");
  passwordError = 1;
}

password.blur(function (event) {
  const regex = /^[A-Za-z0-9+]+$/;
  if (password.val().length === 0) {
    passwordInitialCheck();
  } else if (password.val().length < 8 || password.val().length > 12) {
    password.css("border", "1px solid red");
    passwordSpan.text("Password should be between 8 and 12 char");
    passwordSpan.css({ visibility: "visible", color: "red" });
    cPassword.prop("disabled", true);
    cPassword.val("");
    passwordError = 1;
  } else if (!regex.test(password.val())) {
    password.css("border", "1px solid red");
    passwordSpan.text("Password should contain only Alphanumeric Char");
    passwordSpan.css({ visibility: "visible", color: "red" });
    cPassword.prop("disabled", true);
    cPassword.val("");
    passwordError = 1;
  } else {
    password.css("border", "1px solid black");
    passwordSpan.css("visibility", "hidden");
    cPassword.prop("disabled", false);

    passwordError = 0;
  }
});

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to confirm password input field blur event and validate the input field.Must be compulsary and must be same as password field.
 * @param {event} event The event object that fires on Confirm Password input field.
 * @returns {void}
 */

function cPasswordInitialCheck() {
  cPassword.css("border", "1px solid red");
  cPasswordSpan.text("Confirm Password is Compulsary");
  cPasswordSpan.css({ visibility: "visible", color: "red" });
  cPasswordError = 1;
}

cPassword.blur(function (event) {
  if (cPassword.val().length === 0) {
    cPasswordInitialCheck();
  } else if (cPassword.val() !== password.val()) {
    cPassword.css("border", "1px solid red");
    cPasswordSpan.text("Should be Exactly same as Password");
    cPasswordSpan.css({ visibility: "visible", color: "red" });
    cPasswordError = 1;
  } else {
    cPassword.css("border", "1px solid black");
    cPasswordSpan.css("visibility", "hidden");
    cPasswordError = 0;
  }
});

const month = $('select[name ="month"]');

const day = $('select[name ="day"]');
const year = $('select[name ="year"]');
const dobUl = $(".dob_fileds");
const dobSpan = $("#dobSpan");
const ageField = $('input[name ="age"]');
let dobError = 0;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to date of birth input field click event and validate the form. Date of birth with date, month, year required.
 * @param {event} event The event object that fires on Date of birth parent div.
 * @returns {void}
 */

dobUl.click(function (event) {
  if (month.val() !== null && day.val() !== null && year.val() !== null) {
    dobSpan.css("visibility", "hidden");
    dobError = 0;
    let age;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    monthDiff = mm - parseInt(month.val());
    if (monthDiff < 0) {
      monthDiff += 12;
    }

    if (mm - parseInt(month.val()) < 0) {
      age = yyyy - parseInt(year.val()) - 1;
    } else {
      age = yyyy - parseInt(year.val());
    }
    if (monthDiff !== 12) {
      age = age + "." + monthDiff;
    }

    if (parseFloat(monthDiff > 9)) {
      ageField.val(parseFloat(age).toFixed(2));
    } else {
      ageField.val(parseFloat(age));
    }
  }
});

const radio = $('input[name ="radio"]');
const radioSpan = $("#radioSpan");
let radioError = 1;

const aboutYou = $('textarea[name="aboutYou"]');
const aboutYouSpan = $("#aboutYouSpan");
let aboutError = 1;

/**
 * @author Nilesh Chavan
 * @description Event Listener that listens to about you input field blur event and validate the about you input field. It is compulsary field.
 * @param {event} event The event object that fires on About you text field.
 * @returns {void}
 */

function aboutYouInitialCheck() {
  aboutYouSpan.text("About You is compulsary");
  aboutYouSpan.css({ visibility: "visible", color: "red" });
  aboutYou.css("border", "1px solid red");
  aboutError = 1;
}

aboutYou.blur(function (event) {
  if (aboutYou.val().length === 0) {
    aboutYouInitialCheck();
  } else {
    aboutYouSpan.css("visibility", "hidden");
    aboutYou.css("border", "1px solid black");
    aboutError = 0;
  }
});

/**
 * @author Nilesh Chavan
 * @description This function gets called when we click on submit form. Validate Each input field that is required.
 * @param {event} event The event object that fires on form i.e submit.
 * @returns {boolean} return true or false based on validation.
 */

function validateMe(event) {
  let interestError = 1;
  const interestSpan = $("#interestSpan");

  if (fname.val().length === 0 || fname.val().length < 3) {
    fnameInitialCheck();
  }

  if (lname.val().length === 0 || lname.val().length < 3) {
    lnameInitialCheck();
  }

  if (phone.val().length === 0) {
    phoneInitialCheck();
  }

  if (office.val().length === 0 || office.val().length < 7) {
    officeInitialCheck();
  }

  if (email.val().length === 0) {
    emailInitialCheck();
  }
  if (password.val().length === 0) {
    passwordInitialCheck();
  }

  if (cPassword.val().length === 0) {
    cPasswordInitialCheck();
  } else if (cPassword.val() !== password.val()) {
    cPassword.css("border", "1px solid red");
    cPasswordSpan.text("Confirm Password is must be same as Password");
    cPasswordSpan.css({ visibility: "visible", color: "red" });
    cPasswordError = 1;
  }

  if (month.val() === null || day.val() === null || year.val() === null) {
    dobSpan.text("DOB is compulsary");
    dobSpan.css({ visibility: "visible", color: "red" });
    dobError = 1;
  }

  if (aboutYou.val().length === 0) {
    aboutYouInitialCheck();
  }

  if (!radio[0].checked && !radio[1].checked) {
    radioSpan.text("Please Select Gender");
    radioSpan.css({ visibility: "visible", color: "red" });
    radioError = 1;
  } else {
    radioSpan.css("visibility", "hidden");
    radioError = 0;
  }

  var form_data = new FormData(document.querySelector("form"));

  if (form_data.getAll("interest[]").length > 0) {
    interestSpan.css("visibility", "hidden");
    interestError = 0;
  } else {
    interestSpan.text("Please select at least one interst");
    interestSpan.css({ visibility: "visible", color: "red" });
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
