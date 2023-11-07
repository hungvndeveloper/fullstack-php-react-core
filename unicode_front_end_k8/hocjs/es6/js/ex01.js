/*
Biến trong ES6 
let
const

Giống nhau: 
- Chỉ sử dụng trong scope
- Không khai báo nhiều lần trong 1 scope

Khác nhau: 
- let: Có thể thay đổi được
- const: Không thể thay đổi (Hằng số)

Scope: 
1. Global Scope: Không thuộc 1 khối nào

2. Local Scope

- Function Scope: Khai báo trong 1 hàm
- Block Scope: Khai báo trong 1 khối nhỏ (if, vòng lặp) => Có cặp ngoặc nhọn {}

Khi nào dùng let

- Khi muốn thay đổi giá trị 

Khi nào dùng const

- Khi không muốn thay đổi

Áp dụng: định nghĩa hàm, khai báo object, array

*/

let a = 10;

const funcA = function () {
  let b = 10;

  for (let i = 0; i < 10; i++) {
    console.log(i);
    let b = 11;
  }
};

funcA();

const users = {};
users.name = "Hoàng An";

console.log(users);

const customers = [];
customers[0] = "Hoàng An";
customers[1] = 30;
console.log(customers);
