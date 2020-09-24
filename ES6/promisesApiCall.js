function fetchData() {
  const promise = new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users", {
      method: "GET",
    })
      .then((res) => {
        resolve(res.json());
      })
      .catch((e) => {
        reject(e);
      });
  });
  return promise;
}

function printData(data) {
  console.log(data);
  for (const row of data) {
    console.log(row);
  }
}

// fetchData()
//   .then((res) => {
//     console.log(res);
//     return res.data;
//   })
//   .then((res) => {
//     printData(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//

// Using Async Await

async function callApi() {
  try {
    const res = await fetchData();
    console.log(res);
    printData(res.data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("My Works is Done do some clean up");
  }
}

callApi();
