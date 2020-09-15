"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    return (n1 + n2).toString();
}
function printResult(num) {
    console.log("Result is: ", num);
}
// let addValue: Function;
var addValue;
addValue = add;
// addValue = printResult;
// addValue = 2; //Gives Error
//
// Callback
function addAndPrint(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndPrint(2, 3, printResult);
addAndPrint(2, 3, function (result) {
    console.log(result);
});
