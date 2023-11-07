// var getMessage = function () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// };

// getMessage();

/*
let sử dụng với những giá trị muốn thay đổi
const sử dụng với những giá trị không muốn thay đổi (Thường được sử dụng để khai báo object, array)
*/

// const a = {};
// a.name = "Hoàng An";
// console.log(a);

const old = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

const newObj = {
  location: "HN",
  ...old,
};

console.log(newObj);

//Spread được dùng để clone object, array

const customers = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  address: "Hà Nội",
  job: "Trainer",
  age: 50,
};

const { name: customerName, email, age = 30, ...rest } = customers;

console.log(customerName, email, age);
console.log(rest);

const users = ["Hoàng An", "hoangan.web@gmail.com", "Hà Nội"];

const [name1, email1, ...abc] = users;

console.log(name1, email1);
console.log(abc);

const handleMessage = function ({ name, email }) {
  console.log(name, email);
};

const myObj = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

handleMessage(myObj);
