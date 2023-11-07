//Các phương thức xử lý mảng

console.log(Array.prototype);
console.log([Array]);

//1. Nếu các phương thức được build từ Prototype: tenbienmang.tenPhuongThuc()

//2. Nếu các phương thức được build trực tiếp từ Function Constructor: Array => Array.tenthuocthuc(tenbienmang)

const users = ["Item 1", "Item 2", "Item 3", "Item 2"];

// console.log(users.length);

// console.log(Array.isArray(users));

//users.fill("Unicode");

console.log(users.indexOf("Item 2")); //Trả về index của element tìm được
console.log(users.lastIndexOf("Item 2")); //Trả về index cuối cùng của element tìm được
console.log(users.includes("Item 2")); //Giống indexOf nhưng chỉ trả về true, false

// const count = users.push("Item 4", "Item 5", "Item 6");
// console.log(count);

//const count = users.unshift("Item 4");

// const lastDelete = users.pop(); //Xóa phần tử cuối cùng và trả về phần tử vừa xóa
// console.log(lastDelete);

// const firstDelete = users.shift(); //Xóa phần tử đầu tiên và trả về phần tử vừa xóa
// console.log(firstDelete);

//users.splice(1, 1); //Xóa phần tử theo index

//const users2 = users.concat(["Item 4", "Item 5", "Item 6"]);
// const users2 = users.concat("Item 4");
// console.log(users2);

// const sub = users.slice(1, 3); //Cắt mảng
// console.log(sub);

// console.log(users.join(" - "));

// console.log(users);

//Vòng lặp

// users.forEach(function (users, index) {
//   console.log(users, index);
// });

// const results = users.map(function (user, index) {
//   return `<p class="item-${index}">${user}</p>`;
// });

// console.log(results);

// const results = users.filter(function (user, index) {
//   return user !== "Item 2";
// });

// console.log(results);

// const results = users.find(function (user, index) {
//   return user !== "Item 2";
// });

// console.log(results);

// const numbers = [5, 10, 3, 7];
// const result = numbers.find(function (number) {
//   return number > 5;
// });

// console.log(result);

// const index = users.findIndex(function (user) {
//   return user === "Item 2";
// });

// console.log(index);

// const numbers = [5, 10, 3, 7];

// const check = numbers.some(function (number) {
//   return number % 2 === 0;
// });

// console.log(check);

// const numbers = [5, 1, 3, 7];
// const check = numbers.every(function (number) {
//   return number % 2 !== 0;
// });
// console.log(check);

//Reduce

const numbers = [5, 10, 3, 7];

const total = numbers.reduce(function (prevValue, newValue) {
  console.log(prevValue, newValue);
  return prevValue + newValue;
}, 0);

console.log(total);

/*
Bài tập: 
Cho 1 danh sách họ và tên sinh viên:
- Tạ Hoàng An
- Phạm Xuân Tuấn
- Nguyễn Hoàng Anh
- Phạm Thị Dung

Yêu cầu: Sắp xếp danh sách họ tên theo thứ tự tăng dần (Theo tên)
*/

const students = [
  "Tạ Hoàng An",
  "Phạm Xuân Tuấn",
  "Nguyễn Hoàng Anh",
  "Phạm Thị Dung",
];

const getName = function (fullname) {
  return fullname.split(" ").slice(-1)[0];
};

// students.sort(function (a, b) {
//   const codeA = getName(a).charCodeAt(0);
//   const codeB = getName(b).charCodeAt(0);
//   if (codeA < codeB) {
//     return -1;
//   }

//   return 1;
// });

for (var i = 0; i < students.length - 1; i++) {
  for (var j = i + 1; j < students.length; j++) {
    if (
      getName(students[i]).charCodeAt(0) > getName(students[j]).charCodeAt(0)
    ) {
      const temp = students[i];
      students[i] = students[j];
      students[j] = temp;
    }
  }
}

console.log(students);
