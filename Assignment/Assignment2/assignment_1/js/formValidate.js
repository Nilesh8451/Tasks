const fname = document.getElementsByName("firstname")[0];
const fnameSpan = document.getElementById("firstnameSpan");
let fnameError = 1;

fname.addEventListener("blur", () => {
  if (fname.value.length === 0) {
    fname.style.border = "1px solid red";
    fnameSpan.textContent = "Firstname is Compulsary";
    fnameSpan.style.color = "red";
    fnameError = 1;
  } else {
    fname.style.border = "1px solid black";
    fnameSpan.textContent = "";
    fnameError = 0;
  }
});

const lname = document.getElementsByName("lastname")[0];
const lnameSpan = document.getElementById("lastnameSpan");
let lnameError = 1;

lname.addEventListener("blur", () => {
  if (lname.value.length === 0) {
    lname.style.border = "1px solid red";
    lnameSpan.textContent = "Lastname is Compulsary";
    lnameSpan.style.color = "red";
    lnameError = 1;
  } else {
    lname.style.border = "1px solid black";
    lnameSpan.textContent = "";
    lnameError = 0;
  }
});

const phone = document.getElementsByName("phone")[0];
const phoneSpan = document.getElementById("phoneSpan");
let phoneError = 1;

phone.addEventListener("blur", () => {
  var phoneno = /^\d{10}$/;

  if (phone.value.length === 0) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "Phone No is Compulsary";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else if (isNaN(phone.value)) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "It Should Contain Number Only";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else if (!phone.value.match(phoneno)) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "Please Enter Valid Number";
    phoneSpan.style.color = "red";
    phoneError = 1;
  } else {
    phone.style.border = "1px solid black";
    phoneSpan.textContent = "";
    phoneError = 0;
  }
});

const office = document.getElementsByName("office")[0];
const officeSpan = document.getElementById("officeSpan");
let officeError = 0;

office.addEventListener("blur", () => {
  if (isNaN(office.value)) {
    office.style.border = "1px solid red";
    officeSpan.textContent = "It Should Contain Number Only";
    officeSpan.style.color = "red";
    officeError = 1;
  } else {
    office.style.border = "1px solid black";
    officeSpan.textContent = "";
    officeError = 0;
  }
});

const email = document.getElementsByName("email")[0];
const emailSpan = document.getElementById("emailSpan");
let emailError = 1;

email.addEventListener("blur", () => {
  if (email.value.length === 0) {
    email.style.border = "1px solid red";
    emailSpan.textContent = "Email is Compulsary";
    emailSpan.style.color = "red";
    emailError = 1;
  } else if (1) {
    const regex = /^[A-Za-z0-9+_.-]+@(.+)(\.\w+)$/;
    if (!regex.test(email.value)) {
      email.style.border = "1px solid red";
      emailSpan.textContent = "Please Enter Valid Email";
      emailSpan.style.color = "red";
      emailError = 1;
    } else {
      email.style.border = "1px solid black";
      emailSpan.textContent = "";
      emailError = 0;
    }
  }
});

const password = document.getElementsByName("password")[0];
const passwordSpan = document.getElementById("passwordSpan");
let passwordError = 1;

password.addEventListener("blur", () => {
  const regex = /^[A-Za-z0-9+]+$/;
  if (password.value.length === 0) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password is Compulsary";
    passwordSpan.style.color = "red";
    passwordError = 1;
  } else if (password.value.length < 8 || password.value.length > 12) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password should be between 8 and 12 char";
    passwordSpan.style.color = "red";
    passwordError = 1;
  } else if (!regex.test(password.value)) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password should contain only Alphanumeric Char";
    passwordSpan.style.color = "red";
    passwordError = 1;
  } else {
    password.style.border = "1px solid black";
    passwordSpan.textContent = "";
    passwordError = 0;
  }
});

const cPassword = document.getElementsByName("cPassword")[0];
const cPasswordSpan = document.getElementById("cPasswordSpan");
let cPasswordError = 1;

cPassword.addEventListener("blur", () => {
  if (cPassword.value.length === 0) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Password is Compulsary";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  } else if (cPassword.value !== password.value) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Should be Exactly same as Password";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  } else {
    cPassword.style.border = "1px solid black";
    cPasswordSpan.textContent = "";
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

dobUl.addEventListener("click", () => {
  //   console.log("click");

  if (month.value !== "month" && day.value !== "day" && year.value !== "year") {
    dobSpan.textContent = "";
    dobError = 0;

    let age;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    // console.log(dd, mm, yyyy);

    monthDiff = mm - parseInt(month.value);
    if (monthDiff < 0) {
      monthDiff += 12;
    }

    // console.log("month Diff", monthDiff);
    if (mm - parseInt(month.value) < 0) {
      age = yyyy - parseInt(year.value) - 1;
    } else {
      age = yyyy - parseInt(year.value);
    }
    // console.log(age);
    if (monthDiff !== 12) {
      age = age + "." + monthDiff;
      //   console.log(age);
    }

    // console.log(parseFloat(age).toFixed(2));
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

aboutYou.addEventListener("blur", () => {
  if (aboutYou.value.length === 0) {
    aboutYouSpan.textContent = "About You is compulsary";
    aboutYouSpan.style.color = "red";
    aboutYou.style.border = "1px solid red";
    aboutError = 1;
  } else {
    aboutYouSpan.textContent = "";
    aboutYou.style.border = "1px solid gray";
    aboutError = 0;
  }
});

function validateMe(event) {
  let interestError = 1;
  const interestSpan = document.getElementById("interestSpan");

  if (fname.value.length === 0) {
    fname.style.border = "1px solid red";
    fnameSpan.textContent = "Firstname is Compulsary";
    fnameSpan.style.color = "red";
    fnameError = 1;
  }

  if (lname.value.length === 0) {
    lname.style.border = "1px solid red";
    lnameSpan.textContent = "Lastname is Compulsary";
    lnameSpan.style.color = "red";
    lnameError = 1;
  }

  if (phone.value.length === 0) {
    phone.style.border = "1px solid red";
    phoneSpan.textContent = "Phone No is Compulsary";
    phoneSpan.style.color = "red";
    phoneError = 1;
  }

  if (email.value.length === 0) {
    email.style.border = "1px solid red";
    emailSpan.textContent = "Email is Compulsary";
    emailSpan.style.color = "red";
    emailError = 1;
  }

  if (password.value.length === 0) {
    password.style.border = "1px solid red";
    passwordSpan.textContent = "Password is Compulsary";
    passwordSpan.style.color = "red";
    passwordError = 1;
  }

  if (cPassword.value.length === 0) {
    cPassword.style.border = "1px solid red";
    cPasswordSpan.textContent = "Password is Compulsary";
    cPasswordSpan.style.color = "red";
    cPasswordError = 1;
  }

  if (month.value === "month" || day.value === "day" || year.value === "year") {
    dobSpan.textContent = "DOB is compulsary";
    dobSpan.style.color = "red";
    dobError = 1;
  }

  if (aboutYou.value.length === 0) {
    aboutYouSpan.textContent = "About You is compulsary";
    aboutYouSpan.style.color = "red";
    aboutYou.style.border = "1px solid red";
    aboutError = 1;
  }

  console.log(radio[0].checked, radio[1].checked);

  if (!radio[0].checked && !radio[1].checked) {
    radioSpan.textContent = "Please Select Gender";
    radioSpan.style.color = "red";
    radioError = 1;
  } else {
    radioSpan.textContent = "";
    radioError = 0;
  }

  var form_data = new FormData(document.querySelector("form"));
  console.log(form_data);

  if (form_data.getAll("interest[]").length > 0) {
    interestSpan.textContent = "";
    interestError = 0;
  } else {
    interestSpan.textContent = "Please select at least one interst";
    interestSpan.style.color = "red";
    interestError = 1;
  }

  console.log(
    fnameError,
    lnameError,
    phoneError,
    officeError,
    emailError,
    passwordError,
    cPasswordError,
    dobError,
    radioError,
    interestError,
    aboutError
  );

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
