let myMap = new Map([
  ["person1", "Nilesh"],
  ["person2", "Omkar"],
]);

myMap.set("person3", "Kamesh");

let key = {
  name: "Dinesh",
};

let keyA = [1, 2, 3, 4];

myMap.set(key, "Dinesh");

myMap.delete("person4");

myMap.set(keyA, "Anirudh");

console.log(myMap.size);

console.log(myMap.get(keyA));

console.log(myMap);
