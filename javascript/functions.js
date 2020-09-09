add(1, 2);
function add(a, b) {
  console.log(a + b);
}
add(1, 2);

//

// addMath1(2,3);
const addMath1 = function (a, b) {
  console.log(a + b);
};
addMath1(2, 3);

//

const addMath2 = (a, b) => {
  console.log(a + b);
};
addMath2(3, 4);

//

const addMath3 = (a = 3, b = 3) => {
  console.log(a + b);
};
addMath3();
addMath3(1);
addMath3(2, 3);

//

// Rest Operator
const addMath4 = (...a) => {
  console.log(a);
};
addMath4(1, 2, 3, 4, 5, 6);

//

// arguments
function addMath5() {
  console.log(arguments);
}
addMath5(1, 2, 3, 4, 5, 6);

// arguments
const addMath6 = function () {
  console.log(arguments);
};
addMath6(1, 2, 3, 4, 5, 6);

//

// Factory Function
function createTaxCal(tax) {
  function calTax(amt) {
    return amt * tax;
  }
  return calTax;
}

const calValTax = createTaxCal(0.3);
console.log(calValTax(2));
console.log(calValTax(4));
console.log(calValTax(7));

//

// Closures

let multiplier = 1;

function createTaxCal2(tax) {
  function calTax2(amt) {
    console.log(multiplier);
    return amt * tax * multiplier;
  }
  return calTax2;
}

const calTaxVal2 = createTaxCal2(0.18);

multiplier = 3;

console.dir(calTaxVal2);
console.log(calTaxVal2(200));
