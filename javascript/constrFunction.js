function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greet = function () {
    console.log(`Welcome ${this.firstName}`);
  };
}

// Prototype Inheritance

Person.prototype.printAge = function () {
  console.log(`Hello ${this.firstName} your age is ${this.age}`);
};

var myFather = new Person("Kamesh", "Bhise", 30);
var myMother = new Person("Deepika", "Bhise", 28);

myFather.nationality = "Indian";
myMother.nationality = "British";

myFather.name = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

myFather.name();
myFather.greet();
myFather.printAge();
//
