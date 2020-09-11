"use strict";
exports.__esModule = true;
var myname = "Nilesh Chavan";
var myname1 = "Tushar";
var isAdmin = true;
var isAdmin1 = false;
var sum = 8;
if (true) {
  var sum_1 = 0;
  console.log(sum_1);
}
console.log(sum);
console.log(myname + " is " + (isAdmin ? "admin" : "not an admin"));
console.log(myname1 + " is " + (isAdmin1 ? "admin" : "not an admin"));
//
//Array
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
// Tuple with fixed size and fixed order along with type
var list3 = ["Nilesh", 20];
var list4 = [1, 2, "Nilesh"];
// Enum
var Color;
(function (Color) {
  Color[(Color["Red"] = 0)] = "Red";
  Color[(Color["Green"] = 1)] = "Green";
  Color[(Color["Blue"] = 2)] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// Gives an index(default it starts with 0 if we want to start with another value )
// You can do it like this enum Color {Red = 6 ,Green , Blue} -> then it will print 5 and for next 6
console.log(c);
//
// unknown
var value = "Hello World";
var someString = value;
var otherString = someString.toUpperCase();
console.log(otherString);
var myVar = {
  name: "Nilesh",
  greet: function () {
    console.log("Welcome to Neosoft " + this.name);
  },
};
myVar.greet();
//
// Union
var myValidity;
myValidity = 8454226162;
myValidity = "Chavan86@gmail.com";
var yourTypeOfPrint;
yourTypeOfPrint = "alert";
yourTypeOfPrint = 1;
// yourTypeOfPrint = "Nilesh";
//
// Function
function add(num1, num2) {
  //Second parameter is optional
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
function add2(num1, num2) {
  if (num2 === void 0) {
    num2 = 20;
  }
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
console.log(add(2, 3));
console.log(add(2));
console.log(add2(2, 3));
console.log(add2(2));
// console.log(add(2, "3")); //this will give error
var mynameis = {
  name: "nilesh",
  greet: function () {
    console.log("Welcome " + this.name);
  },
};
mynameis.greet();
