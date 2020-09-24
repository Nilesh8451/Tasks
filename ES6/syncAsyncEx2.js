function getUserInfo() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is User data");
    }, 3000);
  });
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  console.log(count);
  return promise;
}

function callPromise() {
  getUserInfo().then((res) => {
    console.log(res);
  });
  let count = 1;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  console.log(count);
  console.log("Work Done After Calling Promise");
}

// callPromise();

async function callPromiseEx2() {
  try {
    const data = await getUserInfo();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  console.log(count);
  console.log("Work Done After Calling Promise");
}

callPromiseEx2();
