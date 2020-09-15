"use strict";
var btn = document.querySelector("button");
var num1 = document.getElementById("num1");
// ! for to tell typescript that its never yeilds null and after that we are doing typecasting
var num2 = document.getElementById("num2");
var res = document.getElementById("res");
function add(num1, num2) {
    res.value = num1 + " + " + num2 + "  = " + (num1 + num2);
}
btn.addEventListener("click", function (e) {
    e.preventDefault();
    add(+num1.value, parseInt(num2.value));
});
