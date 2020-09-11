// api url
const api_url = "https://reqres.in/api/users";

async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
}
getapi(api_url);

fetch("https://reqres.in/api/users", {
  method: "POST",

  body: JSON.stringify({
    name: "morpheus",
    job: "leader",
  }),

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())

  .then((json) => console.log(json));
