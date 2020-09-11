const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users");
  xhr.responseType = "json";

  xhr.onload = () => {
    const data = xhr.response.data;
    console.log(data);
  };
  xhr.send();
};

const sendData = (user) => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://reqres.in/api/users");
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => {
    const data = xhr.response;
    console.log(data);
  };
  xhr.send(JSON.stringify(user));
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", () => {
  sendData({
    name: "morpheus",
    job: "leader",
  });
});
