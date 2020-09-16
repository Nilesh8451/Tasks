const name1 = document.getElementById("inputName");
const dept1 = document.getElementById("inputDepart");
const age1 = document.getElementById("inputAge");
const email1 = document.getElementById("inputEmail");
const password1 = document.getElementById("inputPassword");
const cPassword1 = document.getElementById("inputPassword1");
const rate1 = document.getElementById("inputRate");
const check1 = document.getElementById("inputCheck");
const gender1 = document.getElementsByName("inputGender");
const photo1 = document.getElementById("profilePhoto");
const number1 = document.getElementById("inputNumber");

name1.addEventListener("blur", () => {
  if (name.value === "" || name.value.length <= 1 || name.value.length >= 40) {
    nameSpan.textContent = "Name must be min 2 char long and max 40 char long";
  } else {
    nameSpan.textContent = "";
  }
});

dept1.addEventListener("blur", () => {
  if (1) {
    const id = deptName.findIndex((d) => {
      return d === dept.value.toLowerCase();
    });
    if (id === -1) {
      deptSpan.textContent = "Department is not valid";
    } else {
      deptSpan.textContent = "";
    }
  }
});

age1.addEventListener("blur", () => {
  if (age.value !== "") {
    console.log(age.value);
    const ageArray = age.value.split("-");
    if (ageArray[0] > 2000) {
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
});

email1.addEventListener("blur", () => {
  if (email.value !== "") {
    regex = /^[A-Za-z0-9+_.-]+@(.+)(\.\w+)$/;
    if (!regex.test(email.value)) {
      emailSpan.textContent = "Please Enter Valid Email address";
    } else {
      emailSpan.textContent = "";
    }
  } else {
    emailSpan.textContent = "Email is Required";
  }
});

password1.addEventListener("blur", () => {
  if (password.value === "" || password.value.length <= 5) {
    passwordSpan.textContent = "Password must be at least 6 char long";
  } else {
    passwordSpan.textContent = "";
  }
});

cPassword1.addEventListener("blur", () => {
  if (cPassword.value === "" || cPassword.value != password.value) {
    cPasswordSpan.textContent = "Password and Confirm Password is not matching";
  } else {
    cPasswordSpan.textContent = "";
  }
});

number1.addEventListener("blur", () => {
  if (number.value) {
    console.log(number.value);
    var phoneno = /^\d{10}$/;

    if (number.value.match(phoneno)) {
      numberSpan.textContent = "";
    } else {
      numberSpan.textContent = "Please enter valid number";
    }
  } else {
    numberSpan.textContent = "Please Enter Your mobile Number";
  }
});
