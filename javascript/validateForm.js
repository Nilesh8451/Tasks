const name = document.getElementById("inputName");
const dept = document.getElementById("inputDepart");
const age = document.getElementById("inputAge");
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");

const nameSpan = document.getElementById("nameSpan");
const deptSpan = document.getElementById("departSpan");
const ageSpan = document.getElementById("ageSpan");
const emailSpan = document.getElementById("emailSpan");
const passwordSpan = document.getElementById("passwordSpan");

const deptName = ["computer", "information technology", "civil", "mechanical"];
var nameError = 0;
var emailError = 0;
var passwordError = 0;
var ageError = 0;
var deptError = 0;

function validateMe(e) {
  //   e.preventDefault();
  if (name.value === "" || name.value.length <= 1 || name.value.length >= 40) {
    nameSpan.textContent = "Name must be min 2 char long and max 40 char long";
    nameError = 1;
  } else {
    nameSpan.textContent = "";
    nameError = 0;
  }

  if (1) {
    const id = deptName.findIndex((d) => {
      return d === dept.value.toLowerCase();
    });
    if (id === -1) {
      //   console.log("department is not valid");
      deptSpan.textContent = "Department is not valid";
      deptError = 1;
    } else {
      deptSpan.textContent = "";
      deptError = 0;
    }
  }

  if (age.value !== "") {
    console.log(age.value);
    const ageArray = age.value.split("-");
    if (ageArray[0] > 2000) {
      //   console.log("You are not allowed to enter data");
      ageSpan.textContent = "Your age must be min 20 years";
      ageError = 1;
    } else {
      ageSpan.textContent = "";
      ageError = 0;
    }
  } else {
    ageSpan.textContent = "Enter you birth date";
    ageError = 1;
  }

  if (email.value !== "") {
    regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (!regex.test(email.value)) {
      //   console.log("Enter valid Email address");
      emailSpan.textContent = "Please Enter Valid Email address";
      emailError = 1;
    } else {
      emailSpan.textContent = "";
      emailError = 0;
    }
  } else {
    // console.log("Please enter email address");
    emailSpan.textContent = "Email is Required";
    emailError = 1;
  }

  if (password.value === "" || password.value.length <= 5) {
    // console.log("Password must be at least 6 char long");
    passwordSpan.textContent = "Password must be at least 6 char long";
    passwordError = 1;
  } else {
    passwordSpan.textContent = "";
    passwordError = 0;
  }
  if (ageError || passwordError || nameError || emailError || deptError) {
    return false;
  }
}
