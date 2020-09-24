let carWeakMap = new WeakMap();

let key1 = {
  id: 1,
};

let key2 = {
  id: 2,
};

let car1 = {
  make: "Honda",
  model: "Civic",
};

carWeakMap.set(key1, car1);

carWeakMap.set(key2, "Car2");

carWeakMap.delete(key2);

console.log(carWeakMap);
