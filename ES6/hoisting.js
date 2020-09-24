print();

function print() {
  console.log(nameB);
  //   console.log(nameA);
  //   console.log(nameC);

  let nameA = "Nilesh";
  var nameB = "Nilesh Chavan";
  const nameC = "Nilesh Ganpat Chavan";

  greet(nameB);
  console.log(nameB);
}

function greet(name) {
  console.log(
    `Hi ${name}, Neosoft Technologies selected you as a best performer of the Year! Congrats.`
  );
}
