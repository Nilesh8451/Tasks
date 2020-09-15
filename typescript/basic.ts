// string number boolean
function add(a: number, b: number, showResult?: boolean, result?: string) {
  if (showResult) {
    console.log(result + (a + b));
  } else {
    return a + b;
  }
}

//Type Inference
const num1 = 5;
const num2 = 0.3;
let printResult = true;
let resultStatement = "Result of addition is: ";
add(num1, num2, printResult, resultStatement);

console.log(add(num1, num2));
