function add(n1: number, n2: number) {
  return n1 + n2;
}

function add2(n1: number, n2: number): string {
  return (n1 + n2).toString();
}

function printResult(num: number) {
  console.log(`Result is: `, num);
}

// let addValue: Function;
let addValue: (a: number, b: number) => {};

addValue = add;

// addValue = printResult;
// addValue = 2; //Gives Error

//

// Callback

function addAndPrint(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;

  cb(result);
}

addAndPrint(2, 3, printResult);
addAndPrint(2, 3, (result) => {
  console.log(result);
});
