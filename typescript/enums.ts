const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

let person2 = {
  name: "Maximilian",
  age: 20,
  role: ADMIN,
};

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

let person3 = {
  name: "Maximilian",
  age: 20,
  role: Role.ADMIN,
};

console.log(person3.role);

//

enum MyRole {
  ADMIN = 7,
  READ_ONLY,
  AUTHOR,
}
//To start index from 7 (default starts with 0)

//

// String Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction.Down);

//

// Mixed

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
