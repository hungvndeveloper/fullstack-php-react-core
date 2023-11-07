//import file js cần sử dụng
//import getHome, { users, customers, getCustomerList } from "../modules/home.js";
//Khi import từ export default => Đặt tên tùy tý

//import { users, customers } from "../modules/home.js";
//Khi import theo name => Cần Destructuring trực tiếp, không được đổi tên

//Trong trường hợp muốn import default và theo name chung trên 1 dòng (Chỉ áp dụng với 1 file)
//=> import default trước, import name sau

//Import cả 1 file
import * as homeModule from "../modules/home.js";

import { products } from "../modules/products.js";

// const { home, getHome } = homeModule;

// console.log(home);
// console.log(getHome());
// console.log(users);
// console.log(customers);
// console.log(getCustomerList());

// console.log(homeModule);

const { default: getHome, customers, users, getCustomerList } = homeModule;
console.log(getHome());
console.log(users);
console.log(customers);
console.log(getCustomerList());
console.log(products);

/*
Lưu ý: 
- 1 file js vừa có thể import và export
- import luôn nằm trên export
*/

const url = window.location.href;
console.log(url);

document.querySelector("button").addEventListener("click", () => {
  window.open("https://google.com", "", "width=200,height=400");
});
