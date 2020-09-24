let carWeakSet = new WeakSet();

let car1 = {
  make: "Honda",
  model: "Civic",
};

let car2 = {
  make: "Honda",
  model: "Civic",
};

carWeakSet.add(car1);
carWeakSet.add(car2);
carWeakSet.add([1, 2, 3]);

console.log(carWeakSet);

carWeakSet.delete(car2);

console.log(carWeakSet);

//

//
