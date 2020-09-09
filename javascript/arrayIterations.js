var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var square = [];

console.log("*******For Each*******");
nums.forEach((num, ind, numsA) => {
  square.push(num * num);
  //   console.log(ind, numsA);
});

console.log(square);

// map
console.log("********Map********");
console.log(
  nums.map((num, ind, numA) => {
    // console.log(ind, numA);
    return num * num * num;
  })
);

// filter
console.log("*******Filter*********");
console.log(
  nums.filter((num, ind, numA) => {
    return num > 6;
  })
);

// reduce
console.log("*******Reduce*********");
console.log(
  nums.reduce((prevVal, curVal, ind, numA) => {
    return prevVal + curVal;
  }, 0)
);

// Every
console.log("*******Every*********");
console.log(
  nums.every((num, ind, nums) => {
    return num < 11;
  })
);

// Some
console.log("*******Some*********");
console.log(
  nums.some((num, ind, nums) => {
    return num < 8;
  })
);

// IndexOf
console.log("*******index of*********");
console.log(nums.indexOf(3));

// LastIndexOf
console.log("******* Last index of*********");
console.log(nums.lastIndexOf(3));

// find
console.log("*******find******");
console.log(
  nums.find((num, ind, numA) => {
    return num > 6;
  })
);

// findIndex
console.log("**********findIndex************");
console.log(
  nums.findIndex((num, ind, numA) => {
    return num > 6;
  })
);
