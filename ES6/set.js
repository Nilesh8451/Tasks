let mySet = new Set([1, 2, 3, 4, 2, 3, 4, 5]);
console.log(mySet);

mySet.add(6);

mySet.add("7");

mySet.forEach((val) => {
  console.log(val);
});

console.log("Size ", mySet.size);

mySet.add({ a: 1, b: 2 });

mySet.delete("7");

mySet.clear();

mySet.add(6);

console.log(mySet);

console.log("Is set has 6", mySet.has(6));

console.log("Is set has 16", mySet.has(16));
