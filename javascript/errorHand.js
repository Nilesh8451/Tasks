function userInput() {
  const userI = prompt("Enter A Positive Number");

  const parsedVal = parseInt(userI);

  if (isNaN(parsedVal) || parsedVal < 0) {
    throw { message: "Invalid User Input" };
  }

  return parsedVal;
}

try {
  console.log(userInput());
} catch (e) {
  console.log(e);
} finally {
  console.log("this block runs always");
}

// console.log(userInput());

console.log("SOme code.......");
