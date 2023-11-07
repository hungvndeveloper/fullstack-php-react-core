var a = 1; //global scope

function func01() {
  //function scope
  var b = 1;
  if (b > 0) {
    //block scope
  }
}

//console.log(b);

if (a > 0) {
  //block scope
  let c = "Tech2";
  if (c !== "") {
    c = "Tech2 Solutions";
    console.log(c);
  }
  console.log(c);
}

// setTimeout(function () {
//   //callback scope
// }, 100);

const customers = {};

customers.name = "Hoàng An";

//console.log(customers);

const getMessage = function (content, type) {
  type = type ?? "success";
  //type = type !== null && type !== undefined ? type : "success";
  /*
  a = b ?? "success"
  Nếu b !== undefined && b !== null => gán a = b, ngược lại gán a = "success"
  */
  console.log(content, type);
};

//getMessage("Đăng ký thành công", "errors");

const getTotal = function (msg, ...args) {
  if (args.length) {
    const total = args.reduce(function (total, number) {
      return total + parseFloat(number);
    }, 0);
    console.log(`${msg} ${total}`);
  }
};

getTotal("Tổng =", 1, 6, 9, 2, 10, 20);

//console.log(Array.prototype);

/*
find()
filter()
findIndex()
forEach()
map()
some()
every()
reduce()
*/

const func02 = (a) => {
  return `Tech2 ${a}`;
};

//console.log(func02("JS"));

const func03 = (user) => {
  const { name, email } = user;
  console.log(name, email);
};

const user = {
  name: "Hoàng an",
  email: "hoangan.web@gmail.com",
};

func03(user);

//Spread

const oldObj = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

const newObj = {
  age: 30,
  ...oldObj,
};

console.log(newObj);

const oldArr = ["Hoàng An", "hoangan.web@gmail.com"];

const newArr = [30, ...oldArr];

console.log(newArr);

//Clone object
const customer = {
  name: "An",
  company: "Tech2",
};

const customers2 = { ...customer };

customers2.name = "hoàng an";

console.log(customer, customers2);

const products = {
  name: "SP 1",
  price: 12000,
  //sale: "abc",
};

const { name: productName, price, sale = "abc" } = products;

console.log(productName, price, sale);

const posts = ["Bài viết 1", 30000];

const [postName, viewCount] = posts;

console.log(postName, viewCount);
