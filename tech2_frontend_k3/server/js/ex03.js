var client = httpClient(serverApi);
client
  .get("/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    console.log(users);
  });

// client
//   .post("http://localhost:3000/users", {
//     name: "Test abc",
//     email: "testabc@gmail.com",
//   })
//   .then(function (response) {
//     console.log(response);
//   });
