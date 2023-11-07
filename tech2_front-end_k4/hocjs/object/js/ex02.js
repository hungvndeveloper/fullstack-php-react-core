var keys = ["name", "email", "phone"];
var users = {};
//parse
keys.forEach(function (key) {
  users[key] = key + " Value";
});

console.log(users);

const keyObj = Object.keys(users);
keyObj.forEach(function (key) {
  console.log(users[key]);
});
