var users = {
  name: "Hoàng An",
  age: 31,
  getName: function () {
    return "Hoàng An";
  },
};
users.email = "contact@unicode.vn";
users.getEmail = function () {
  return "contact@unicode.vn";
};
users["address"] = "Hà Nội";

// console.log(users);
// console.log(users.name);
// console.log(users.age);
// console.log(users.getName());
// console.log(users["email"]);

// var customers = [];

// customers[0] = "Unicode";
// customers[1] = function () {
//   return "Unicode Academy";
// };

// console.log(customers[0]);
// console.log(customers[1]());

Object.keys(users).forEach(function (key) {
  if (typeof users[key] === "function") {
    console.log(users[key]());
  } else {
    console.log(users[key]);
  }
});
