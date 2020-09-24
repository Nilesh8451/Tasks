const greet = (name) => {
  console.log(`Hello ${name} welcome to the party`);
};

function user(name, cb) {
  setTimeout(() => {
    cb(name);
  }, 2000);
}

user("Nilesh", greet);

//Callback Hell

const userLocation = (pos, cb) => {
  cb(pos);
};

function getCurrentLocationUser() {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setTimeout(() => {
        userLocation(pos, (loc) => {
          console.log(loc);
        });
      }, 2000);
    },
    (err) => {
      console.log(err);
    }
  );
}

getCurrentLocationUser();
