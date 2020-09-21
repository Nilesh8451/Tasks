const name = document.getElementById("inputName");
const dept = document.getElementById("inputDepart");
const age = document.getElementById("inputAge");
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const cPassword = document.getElementById("inputPassword1");
const rate = document.getElementById("inputRate");
const check = document.getElementById("inputCheck");
const gender = document.getElementsByName("inputGender");
const photo = document.getElementById("profilePhoto");
const number = document.getElementById("inputNumber");

const nameSpan = document.getElementById("nameSpan");
const deptSpan = document.getElementById("departSpan");
const ageSpan = document.getElementById("ageSpan");
const emailSpan = document.getElementById("emailSpan");
const passwordSpan = document.getElementById("passwordSpan");
const cPasswordSpan = document.getElementById("cPasswordSpan");
const rateSpan = document.getElementById("rateSpan");
const checkSpan = document.getElementById("inputCheckSpan");
const genderSpan = document.getElementById("genderSpan");
const imageSpan = document.getElementById("imageSpan");
const numberSpan = document.getElementById("numberSpan");

const deptName = ["javascript", "java", "dot net", "php"];
var nameError = 0;
var emailError = 0;
var passwordError = 0;
var ageError = 0;
var deptError = 0;
var rateError = 0;
var checkError = 0;
var genderError = 0;
var imageError = 0;
var numberError = 0;

function validateMe(e) {
  //

  // *******************Name Validation*****************************
  if (name.value === "" || name.value.length <= 1 || name.value.length >= 40) {
    nameSpan.textContent = "Name must be min 2 char long and max 40 char long";
    nameError = 1;
  } else {
    nameSpan.textContent = "";
    nameError = 0;
  }

  // *******************Department Validation*****************************
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

  // *******************Gender Validation*****************************
  if (!gender[0].checked && !gender[1].checked) {
    genderError = 1;
    genderSpan.textContent = "Please select your gender";
  } else {
    genderError = 0;
    genderSpan.textContent = "";
  }

  // **********************Image Validation**************************
  // console.log(photo.files["0"]);
  if (photo.files["0"]) {
    let size = parseInt(photo.files["0"].size / 1024);
    if (size > 1024) {
      imageError = 1;
      imageSpan.textContent = "Image Size is to large";
    } else {
      imageError = 0;
      imageSpan.textContent = "";
    }
  } else {
    imageError = 1;
    imageSpan.textContent = "Image is required";
  }

  // *******************Skill Level Validation*****************************
  if (parseInt(rate.value) < 3) {
    rateError = 1;
    rateSpan.textContent = "Your skills are to low for this Form";
  } else {
    rateError = 0;
    rateSpan.textContent = "";
  }

  // *******************Age Validation*****************************
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

  // *******************Email Validation*****************************
  if (email.value !== "") {
    regex = /^[A-Za-z0-9+_.-]+@(.+)(\.\w+)$/;
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

  // *******************Number Validation*************************

  if (number.value) {
    console.log(number.value);
    var phoneno = /^\d{10}$/;

    if (number.value.match(phoneno)) {
      numberSpan.textContent = "";
      numberError = 0;
    } else {
      numberSpan.textContent = "Please enter valid number";
      numberError = 1;
    }
  } else {
    numberError = 1;
    numberSpan.textContent = "Please Enter Your mobile Number";
  }

  // *******************Password Validation*****************************
  if (password.value === "" || password.value.length <= 5) {
    // console.log("Password must be at least 6 char long");
    passwordSpan.textContent = "Password must be at least 6 char long";
    passwordError = 1;
  } else {
    passwordSpan.textContent = "";
    passwordError = 0;
  }

  if (cPassword.value === "" || cPassword.value != password.value) {
    passwordError = 1;
    cPasswordSpan.textContent = "Password and Confirm Password is not matching";
  } else {
    passwordError = 0;
    cPasswordSpan.textContent = "";
  }

  // *******************Terms and Condition Validation*****************************
  if (!check.checked) {
    checkError = 1;
    checkSpan.textContent = "Please Accept Terms and Condition";
  } else {
    checkError = 0;
    checkSpan.textContent = "";
  }

  if (
    ageError ||
    passwordError ||
    nameError ||
    emailError ||
    deptError ||
    rateError ||
    checkError ||
    genderError ||
    numberError
  ) {
    return false;
  }
}
