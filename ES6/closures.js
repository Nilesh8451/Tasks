function grandPFun() {
  let grandParent = "Omkar";
  function parentFun() {
    let parent = "Kamesh";
    return function child() {
      let child = "Dinesh";
      console.log(
        `GP is ${grandParent} and Parent is ${parent} and child is ${child}`
      );
    };
  }
  grandParent = "Akash";
  return parentFun;
}

const parent = grandPFun();
console.dir(parent);
const child = parent();
console.dir(child);
child();

// Example Number 2

function grandPFun2() {
  let grandFather = "Omkar";
  return function parentFun2() {
    let father = "Kamesh";

    console.log(`My GrantFather is ${grandFather} and my Father is ${father}`);
  };
}

const parentFun = grandPFun2();
console.dir(parentFun);
parent();
