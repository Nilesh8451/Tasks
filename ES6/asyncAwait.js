const cleanRoom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaned Room");
    }, 2000);
  });
};

const removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${message} \nGarbage removed`);
    }, 2000);
  });
};

const winIceCream = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${message} \nWon Ice Cream`);
    }, 2000);
  });
};

async function userTask() {
  let clean = await cleanRoom();
  let removeG = await removeGarbage(clean);
  let winIC = await winIceCream(removeG);

  console.log(winIC);
}

userTask();

console.log("User Performing Action, He will update tasks after 6 sec");
