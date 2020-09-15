function combine(inp1: number | string, inp2: number | string) {
  let res;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    res = inp1 + inp2;
  } else {
    res = inp1.toString() + inp2.toString();
  }
  return res;
}

console.log(combine(1, 2));
console.log(combine("Nilesh ", "Chavan"));
