const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });

  return promise;
};

setTimer(2000).then((res) => {
  console.log(res);
});

const getUserLocation = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
  console.log("Inside GetUserLocation");
  return promise;
};

function GetData() {
  getUserLocation()
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  console.log("Inside GetData ");
}

GetData();
