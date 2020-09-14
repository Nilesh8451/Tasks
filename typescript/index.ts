export {};
let myname: string = "Nilesh Chavan";
let myname1: string = "Tushar";
let isAdmin: Boolean = true;
let isAdmin1: Boolean = false;

let sum: number = 8;

if (true) {
  let sum: number = 0;
  console.log(sum);
}
console.log(sum);

console.log(`${myname} is ${isAdmin ? `admin` : `not an admin`}`);
console.log(`${myname1} is ${isAdmin1 ? `admin` : `not an admin`}`);

//

//Array

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4];

// Tuple with fixed size and fixed order along with type
let list3: [string, number] = ["Nilesh", 20];

list3.push(1);

let list4: any[] = [1, 2, "Nilesh"];

// Enum

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

// Gives an index(default it starts with 0 if we want to start with another value )
// You can do it like this enum Color {Red = 6 ,Green , Blue} -> then it will print 5 and for next 6

console.log(c);

//

// unknown

const value: unknown = "Hello World";
const someString: string = value as string;
const otherString = someString.toUpperCase();
console.log(otherString);

let myVar: unknown = {
  name: "Nilesh",
  greet: function () {
    console.log(`Welcome to Neosoft ${this.name}`);
  },
};

(myVar as { name: string; greet: () => {} }).greet();

//

// Union

let myValidity: string | number;

myValidity = 8454226162;
myValidity = "Chavan86@gmail.com";
// myValidity = true;  //It will give error

//

// Literal

type PrintMode = "console" | "alert" | 1;

let yourTypeOfPrint: PrintMode;

yourTypeOfPrint = "alert";
yourTypeOfPrint = 1;

// yourTypeOfPrint = "Nilesh";

//

// Function
function add(num1: number, num2?: number) {
  //Second parameter is optional
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

function add2(num1: number, num2: number = 20) {
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

let mynameis = {
  name: "nilesh",
  greet: function () {
    console.log(`Welcome ${this.name}`);
  },
};

mynameis.greet();

//

// Interface

function fullname(person: { firstname: string; lastname: string }) {
  console.log(person.firstname, person.lastname);
}
let p = {
  firstname: "Nilesh",
  lastname: "Chavan",
};

fullname(p);

//

interface Person {
  firstname: string;
  lastname: string;
}

function fullname1(person: Person) {
  console.log(person.firstname, person.lastname);
}
let p1 = {
  firstname: "Nilesh",
  lastname: "Chavan",
};

fullname1(p1);

// Ex2

var student: Person = {
  firstname: "Kamesh",
  lastname: "Bhise",
};

console.log("Student First Name: ", student.firstname);
console.log("Student Last Name: ", student.lastname);

// Ex3

type MyStudents = Person[];

var rekhaStudents: MyStudents;
rekhaStudents.push({
  firstname: "Omkar",
  lastname: "Pise",
});

//

//Class

class Employee {
  employeeName: string;
  private employeePassword: string;
  protected employeeSalary: number;

  constructor(name: string, pass: string, sal: number) {
    this.employeeName = name;
    this.employeePassword = pass;
    this.employeeSalary = sal;
  }

  greet() {
    console.log(
      `Good Morning ${this.employeeName} your pass is ${this.employeePassword}`
    );
  }
}

var myEmp1 = new Employee("Nilesh", "Nil", 400000);
myEmp1.greet();

class Manager extends Employee {
  constructor(managerName: string, manaPass: string, sal: number) {
    super(managerName, manaPass, sal);
  }

  delegateWork() {
    console.log(`Manager delegating tasks`);
    console.log(`Manager Salary is ${this.employeeSalary}`);
    // console.log(`Manager Pass ${this.employeePassword}`); //This will give error
  }
}

var myMan1 = new Manager("Tushar", "Tus", 100000);
myMan1.greet();
myMan1.delegateWork();

//

interface Greetable {
  name: string;
}
interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(`${this.name} your age is ${this.age}`);
  }
}

var myUser = new User("nilesh", 20);
myUser.print();

//
