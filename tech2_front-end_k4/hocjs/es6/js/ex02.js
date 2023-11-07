// console.log(users.name, users.email, users.age);
// const name = users.name;
// const email = users.email;
// const age = users.age;

// console.log(name, email, age);

//Destructuring = Phá vỡ cấu trúc (Object, Array)

// const { name: userName, email, address = "Hà Nội" } = users;
// email = "hoangan.web@gmail.com";
// console.log(userName, email, address);

// const { name: username, email, country = "Việt Nam", ...rest } = users;
// console.log(username, email, country);
// console.log(rest);

// const customers = ["Hoàng An", "contact@unicode.vn", 30];
// const [customerName, customerEmail, ...rest] = customers;

// console.log(customerName, customerEmail);
// console.log(rest);

const courses = {
  courseName: "Front-End",
  price: 5000000,
};

const users = {
  name: "Hoàng An",
  email: "contact@unicode.vn",
  age: 30,
  address: "Hồ Chí Minh",
  ...courses,
};
//Spread Operator
//Trải tất các phần tử trong object ra ngoài
// console.log(users);

const oldArr = [1, 2, 3];
const newArr = ["A", "B", "C", ...oldArr];
// console.log(newArr);

//Enhanced Object Literals
let productName = "Sản phẩm 1";
let productPrice = 12000;

const product = {
  productName,
  productPrice,
};

console.log(product);
