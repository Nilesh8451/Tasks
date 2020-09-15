const btn = document.querySelector("button");
const num1 = document.getElementById("num1")! as HTMLInputElement;
// ! for to tell typescript that its never yeilds null and after that we are doing typecasting

const num2 = document.getElementById("num2")! as HTMLInputElement;
const res = document.getElementById("res")! as HTMLInputElement;

function add(num1: number, num2: number) {
  res.value = `${num1} + ${num2}  = ${num1 + num2}`;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  add(+num1.value, parseInt(num2.value));
});
