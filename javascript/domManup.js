const p = document.getElementById("paraFD");
console.log(p);
const p2 = document.querySelector("div #paraFD");
console.log(p);
const div = document.getElementsByClassName("firstDiv")[0];
console.log(div);

p.textContent = "You clicked this para";
p.id = "newId";
p.className = "newClass";
p.style.color = "red";
p2.insertAdjacentHTML("afterend", "<p>You SHould try</p>");
// p.innerHTML = "<b>This is Bold </b>";

//

const ul = document.querySelector("ul");
const btn = document.querySelector("button");
console.log(ul.children);
console.log(ul.firstElementChild);
btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = `Item${ul.children.length + 1}`;
  ul.appendChild(newLi);
});

const btn1 = document.getElementById("nextBtn");
btn1.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = `Item at Top`;
  ul.prepend(newLi);
});
