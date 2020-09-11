var myObj = {
  name: "Nilesh",
  age: 21,
  city: "Mumbai",
};

console.log("Object :", myObj);
var myJsonOb = JSON.stringify(myObj);
console.log("Json :", myJsonOb);

//

var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myParsedObj = JSON.parse(myJSON);

console.log("Parsed Object: ", myParsedObj);

//

var myObj2 = { name: "John", age: 31, city: "New York" };
var myJSON2 = JSON.stringify(myObj2);
localStorage.setItem("testJSON", myJSON2);

// Retrieving data:
var text = localStorage.getItem("testJSON");
var obj = JSON.parse(text);
console.log(obj);

//

var myObj3 = {
  name: "John",
  age: 30,
  cars: ["Ford", "BMW", "Fiat"],
};

for (let i in myObj3) {
  console.log(myObj3[i]);
}

for (let i = 0; i < myObj3.cars.length; i++) {
  console.log(myObj3.cars[i]);
}
