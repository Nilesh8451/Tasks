"use strict";
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person2 = {
    name: "Maximilian",
    age: 20,
    role: ADMIN,
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person3 = {
    name: "Maximilian",
    age: 20,
    role: Role.ADMIN,
};
console.log(person3.role);
//
var MyRole;
(function (MyRole) {
    MyRole[MyRole["ADMIN"] = 7] = "ADMIN";
    MyRole[MyRole["READ_ONLY"] = 8] = "READ_ONLY";
    MyRole[MyRole["AUTHOR"] = 9] = "AUTHOR";
})(MyRole || (MyRole = {}));
//To start index from 7 (default starts with 0)
//
// String Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Down);
//
// Mixed
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
