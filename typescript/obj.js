// const person: { name: string; age: number } = {
//   name: "Nilesh",
//   age: 20,
// };
var person = {
    name: "Nilesh",
    age: 20,
    hobbies: ["Cooking", "Coding"]
};
var favoriteActivities;
favoriteActivities = ["Play", "Study"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var person2;
person2 = {
    name: "Omkar",
    greet: function () {
        console.log("Welcome " + this.name);
    }
};
person2.greet();
//
// Tuple
var person1 = {
    name: "Nilesh",
    dept: "JavaScript",
    age: 21,
    role: [2, "Developer"]
};
// person1.role[1] = 2; //gives an error
person1.role.push("author");
person1.role = [12, "Developer"];
// person1.role = [12, "Developer", "Author"]; //Gives an error
