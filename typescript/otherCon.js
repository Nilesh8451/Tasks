"use strict";
// Unknown
var userInput;
var userName;
var userInput1;
userInput = 5;
userInput = "Tushar";
userInput1 = "Tushar";
// userName = userInput;  //This will give error
// Because unknown type is very strict and when we have to assign it to any other var we need to specifically have to check for types
userName = userInput1; //This wont gives error i.e its not that strict
if (typeof userInput === "string") {
    userName = userInput;
}
//
// Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occured", 500);
