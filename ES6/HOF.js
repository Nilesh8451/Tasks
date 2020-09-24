function calTax(per) {
  return function (amt) {
    return amt * per;
  };
}

productTax = calTax(0.3);
societyTax = calTax(0.13);

console.log(productTax(2000));
console.log(societyTax(2000));

//

//

function greet(name) {
  console.log(`Hey ${name} how are you`);
}

function user(name, cb) {
  name += " Chavan";
  cb(name);
}

user("Nilesh", greet);
