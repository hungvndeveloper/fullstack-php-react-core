/*
Object: đối tượng
Động vật
- Thuộc tính (Biến)
+ Mắt
+ Mũi
+ Tai
+ Màu lông
- Phương thức (Hàm)
+ Đi
+ Chạy
+ Cắn, sủa
*/

//Trong javascript sẽ có các đối tượng có sẵn và các đối tượng tự tạo
//1. Đối tượng có sẵn: String, Array, Number, Math, Map, Date...
//- Sử dụng
//- Phát triển thêm (Thêm các thuộc tính và phương thức)

//2. Đối tượng tự tạo
// Phát triển từ đầu
// Phù hợp với từng loại dự án

//Những phương pháp tạo đối tượng trong Javascript

/*
- Sử dụng Object nguyên bản (Object)
- Sử dụng Function Constructor
- Sử dụng Class (ES6)
*/

//var comments = new Object();
var comments = {
  name: "Hoàng An",
  age: 30,
}; //Khai báo object

//Thêm sau khi khai báo
comments.address = "Phú Thọ";
comments["phone"] = "0388875179";

//Cập nhật
comments.name = "Hoàng An Unicode";

//Xóa thuộc tính trong object
delete comments.age;

// console.log(comments);
// console.log(comments.name);
// console.log(comments["age"]);

// var customers = ["Hoàng An", 30];

//Đọc tất cả các keys trong Object
for (var key in comments) {
  console.log(key);
  console.log(comments[key]);
  /*
  comments['name']
  comments['phone']
  comments['address']
  parse  
  */
}

//comments.name => key = name
//comments.key => key = key
//comments["name"] => key = name
//comments[key] =>

// var users = {
//   name: "Hoàng An",
//   age: 30,
//   address: "Phú Thọ",
//   phone: "0388875179",
// };

// var key = "name";
// console.log(users.key);

console.log("======");
Object.keys(comments).forEach(function (key) {
  console.log(comments[key]);
});

// console.log([Object]);

var user = Object.create(null); //Tạo object không có prototype (Không kế thừa)

console.log(user);
