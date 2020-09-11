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
