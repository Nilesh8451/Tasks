"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
list3.push(1);
var list4 = [1, 2, "Nilesh"];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
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
    }
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
    }
    else {
        return num1;
    }
}
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2) {
        return num1 + num2;
    }
    else {
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
    }
};
mynameis.greet();
//
// Interface
function fullname(person) {
    console.log(person.firstname, person.lastname);
}
var p = {
    firstname: "Nilesh",
    lastname: "Chavan"
};
fullname(p);
function fullname1(person) {
    console.log(person.firstname, person.lastname);
}
var p1 = {
    firstname: "Nilesh",
    lastname: "Chavan"
};
fullname1(p1);
// Ex2
var student = {
    firstname: "Kamesh",
    lastname: "Bhise"
};
console.log("Student First Name: ", student.firstname);
console.log("Student Last Name: ", student.lastname);
var rekhaStudents;
rekhaStudents.push({
    firstname: "Omkar",
    lastname: "Pise"
});
//
//Class
var Employee = /** @class */ (function () {
    function Employee(name, pass, sal) {
        this.employeeName = name;
        this.employeePassword = pass;
        this.employeeSalary = sal;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName + " your pass is " + this.employeePassword);
    };
    return Employee;
}());
var myEmp1 = new Employee("Nilesh", "Nil", 400000);
myEmp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, manaPass, sal) {
        return _super.call(this, managerName, manaPass, sal) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
        console.log("Manager Salary is " + this.employeeSalary);
        // console.log(`Manager Pass ${this.employeePassword}`); //This will give error
    };
    return Manager;
}(Employee));
var myMan1 = new Manager("Tushar", "Tus", 100000);
myMan1.greet();
myMan1.delegateWork();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log(this.name + " your age is " + this.age);
    };
    return User;
}());
var myUser = new User("nilesh", 20);
myUser.print();
//
