const p = document.getElementById("myPara");
const btn = document.querySelector("form");

p.addEventListener("click", () => {
  p.textContent = "You Clicked Me";
  console.log("You clicked para");
});

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("You clicked The send button");
});

//

const myDiv = document.querySelector("div");
const mySpan = document.querySelector("span");
const myButton = document.querySelector("button");

myDiv.addEventListener("click", () => {
  console.log("You clicked Div");
});

mySpan.addEventListener("click", () => {
  console.log("You clicked Span");
});

myButton.addEventListener("click", () => {
  console.log("You clicked Button");
});
