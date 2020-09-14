var person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  age: 20,
  get lang() {
    return this.language;
  },

  set lang(lang) {
    this.language = lang;
  },
};

console.log(person.lang);
person.lang = "en-US";
console.log(person.lang);

Object.defineProperty(person, "myAge", {
  get() {
    return `Your age is ${this.age}`;
  },
  set(age) {
    this.age = age;
  },
});

console.log(person.myAge);
person.myAge = 21;
console.log(person.myAge);
