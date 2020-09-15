"use strict";
// string number boolean
function add(a, b, showResult, result) {
    if (showResult) {
        console.log(result + (a + b));
    }
    else {
        return a + b;
    }
}
//Type Inference
var num1 = 5;
var num2 = 0.3;
var printResult = true;
var resultStatement = "Result of addition is: ";
add(num1, num2, printResult, resultStatement);
console.log(add(num1, num2));
