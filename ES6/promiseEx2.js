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

cleanRoom()
  .then((mess) => {
    return removeGarbage(mess);
  })
  .then((mess) => {
    return winIceCream(mess);
  })
  .then((res) => {
    console.log(res);
  });

console.log("User Performing Action, He will update tasks after 6 sec");

const rejectEx = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Some Error Occured");
    }, 4000);
  });
};

Promise.all([cleanRoom(), removeGarbage(), winIceCream(), rejectEx()])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

Promise.race([cleanRoom(), removeGarbage(), winIceCream(), rejectEx()])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

Promise.allSettled([
  cleanRoom(),
  removeGarbage(),
  winIceCream(),
  rejectEx(),
]).then((res) => {
  console.log(res);
});
