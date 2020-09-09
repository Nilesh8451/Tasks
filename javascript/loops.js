// For loop
courses = ["java", "javascript", "c", "c++", "python"];
coursesO = {
  1: "java",
  2: "javascript",
  3: "c++",
};
console.log("***********for loop**************");
for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

console.log("***********for of loop**************");
for (const course of courses) {
  console.log(course);
}

console.log("***********for in loop**************");
for (const key in coursesO) {
  console.log(coursesO[key]);
}

console.log("***********while loop**************");
let isLoggedIn = true;
let c = 0;
while (isLoggedIn) {
  if (c === 3) {
    break;
  } else {
    console.log(c);
    c++;
  }
}
