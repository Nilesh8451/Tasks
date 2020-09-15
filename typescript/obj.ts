// const person: { name: string; age: number } = {
//   name: "Nilesh",
//   age: 20,
// };

const person = {
  name: "Nilesh",
  age: 20,
  hobbies: ["Cooking", "Coding"],
};

let favoriteActivities: string[];

favoriteActivities = ["Play", "Study"];

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let person2: {
  name: string;
  greet: () => void;
};

person2 = {
  name: "Omkar",
  greet() {
    console.log(`Welcome ${this.name}`);
  },
};

person2.greet();

//

// Tuple

const person1: {
  name: string;
  dept: string;
  age: number;
  role: [number, string];
} = {
  name: "Nilesh",
  dept: "JavaScript",
  age: 21,
  role: [2, "Developer"],
};

// person1.role[1] = 2; //gives an error
person1.role.push("author");

person1.role = [12, "Developer"];
// person1.role = [12, "Developer", "Author"]; //Gives an error
