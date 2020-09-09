const person = {
  name: "Nilesh",
  age: 21,
  hobbies: ["Tech", "Coding", "Sports"],
  greeting: function () {
    console.log(`Welcome `);
  },
};

person.isAdmin = false;
person.age = 20;

console.log(person);

delete person.isAdmin;

console.log(person);
console.log(person.name);
console.log(person["name"]);

//

// Number key
const num = {
  3: "three",
  1: "one",
  2: "two",
};
console.log(num);

//

// Dynamic Property
var myName = "myNameIs";
var age = 20;
var hob = ["sports", "coding"];
const myDe = {
  [myName]: "Nilesh",
  age: age,
  hob,
};
console.log(myDe);
console.log(myDe.myNameIs);

//

// Spread Operator
const test = {
  name: "Nilesh",
};
const test1 = test;
const test2 = { ...test };
test.age = 2;
test1.hobb = ["code"];
console.log(test, test1);

const test3 = { ...test };
test3.dept = "JAVASCRIPT";

console.log(test, test3);
