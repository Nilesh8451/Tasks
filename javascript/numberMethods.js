var x = 1000;
console.log(x.toString().concat(" This works"));

var x = 10.9898;

console.log("toFixed ", x.toFixed(0));
console.log("toFixed ", x.toFixed(1));
console.log("toFixed ", x.toFixed(2));
console.log("toFixed ", x.toFixed(3));

console.log("toPrecision ", x.toPrecision(2));
console.log("toPrecision ", x.toPrecision(3));
console.log("toPrecision ", x.toPrecision(4));

console.log("Value of x", x.valueOf());

console.log("Number ", Number(true));
console.log("Number ", Number(false));
console.log("Number ", Number("10.099"));
console.log("Number ", Number("10+10"));
console.log("Number ", Number("20Nam"));

console.log("parseInt", parseInt("100 100"));
console.log("parseInt", parseInt("100 Number"));
console.log("parseInt", parseInt("100+100"));
console.log("parseInt", parseInt("years 100"));

console.log("max value ", Number.MAX_VALUE);
console.log("min value ", Number.MIN_VALUE);
