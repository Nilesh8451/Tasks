let a = 1;
let b = 2;

setTimeout(function () {
  console.log("Inside Timeout 1", a);
}, 1110);

setTimeout(function () {
  console.log("Inside Timeout 2", a);
}, 3000);

setTimeout(function () {
  console.log("Inside Timeout 3", a);
}, 2000);

console.log(a);

console.log(b);
var result = 0;

for (var i = 0; i < 10000000; i++) {
  result += i;
}

console.log(result);
var result = 0;
for (let i = 0; i < 10000001; i++) {
  result += i;
}

console.log(result);
