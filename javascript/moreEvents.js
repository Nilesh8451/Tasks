const p1 = document.getElementById("e1");
p1.addEventListener("click", () => {
  console.log("You clicked para1");
});

const p2 = document.getElementById("e2");
p2.addEventListener("dblclick", () => {
  console.log("You double clicked para2");
});

const p3 = document.getElementById("e3");
p3.addEventListener("mousedown", () => {
  console.log("Mouse Down para3");
});

const p4 = document.getElementById("e4");
p4.addEventListener("mousemove", () => {
  console.log("Mouse move para4");
});

const p5 = document.getElementById("e5");
p5.addEventListener("mouseout", () => {
  console.log("Mouse out para5");
});

const i1 = document.getElementById("ie1");
i1.addEventListener("keydown", () => {
  console.log("Key down");
});

const i2 = document.getElementById("ie2");
i2.addEventListener("keyup", () => {
  console.log("Key up");
});
