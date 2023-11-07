var customers = ["An", "Đạt", "Tùng", "Tâm", "Tuấn"];

//Thêm phần tử

// customers[customers.length] = "Đức Anh";
// customers[customers.length] = "Tuấn Anh";

customers.push("Đức Anh");
customers.push("Tuấn Anh", "Văn Quân");

//Sửa phần tử
customers[5] = "Hà Đức Anh";

//Xóa phần tử
customers.splice(5, 1);

console.log(customers);

//Duyệt mảng

// for (var index = 0; index < customers.length; index++) {
//   console.log(customers[index]);
// }

// for (var index in customers) {
//   console.log(customers[index]);
// }

for (var element of customers) {
  console.log(element);
}
