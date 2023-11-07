var users = {
  name: "Hoàng An",
  email: "contact@unicode.vn",
  age: 31,
};

users.email = "hoangan.web@gmail.com";

delete users.age;

console.log(users);
