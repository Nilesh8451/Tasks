var names = ["nilesh", "deepesh", "kamesh", "tushar"];

console.log("toString ", names.toString());
console.log("join ", names.join("-"));
console.log("pop ", names.pop(), names);
console.log("push", names.push("tushar"), names);

console.log("shift ", names.shift());
console.log("unshift ", names.unshift("nilesh"));

// console.log("delete ", delete names[0]);

console.log("splice ", names.splice(1, 1, "omkar"), names);

names.concat(["kamini", "jyoti"]);
console.log(names);

console.log("slice ", names.slice(1, 3));

names.sort(function (a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

console.log(names);

// Sorting

let num = [2, 43, 1, 32, 321, 0, 54];

num.sort(function (a, b) {
  return a - b;
});
console.log(num);

num = [2, 43, 1, 32, 321, 0, 59];

num.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(num);
