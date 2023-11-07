Object.prototype.message = "Unicode Academy";
Object.prototype.getCompanyName = function () {
  return "Tech2";
};
var user = {
  name: "Hoàng An",
  age: 30,
  //message: "Unicode Academy",
};

console.log(user);
console.log(user.message);

var person = {
  name: "Anh Quân",
  age: 40,
  //message: "Unicode Academy",
};

console.log(person);
console.log(person.message);

/*
Mong muốn: Cứ tạo đối tượng => có sẵn 1 thuộc tính là message: 'Unicode Academy'

*/

function Customer() {
  this.name = "Nguyễn Văn A";
  this.age = 40;
}

Customer.prototype.courseName = "Khóa học Front-End";
Customer.prototype.getPrice = function () {
  return "12000000";
};

var customer = new Customer();
console.log(customer);
console.log(customer.courseName);
console.log(customer.getPrice());

//Object => Function Constructor | Class

var fullname = "Tạ Hoàng An";
//String.prototype.slice()
console.log(fullname.slice(0, 3));

/*
Ví dụ: Viết 1 phương thức kiểm tra xem chuỗi có phải dạng in hoa hay không?
*/
String.prototype.isUpperCase = function () {
  return this.valueOf().toUpperCase() === this.valueOf();
};

var customerName = "TẠ HOÀNG AN";
console.log(customerName.isUpperCase());

var username = "PHAN VĂN VĨNH";
console.log(username.isUpperCase());

Date.prototype.sayHi = function () {
  var text = `Ngày ${this.getDate()} tháng ${
    this.getMonth() + 1
  } năm ${this.getFullYear()}`;
  return text;
};
var now = new Date();
console.log(now.sayHi());

console.log("=====");
//Array => Foreach

Array.prototype.forEach2 = function (handler) {
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
    handler(arr[i], i); //gọi hàm
  }
};

const customers = ["Hoàng An", "Văn tuấn", "Quân"];
customers.forEach2(function (customer, index) {
  console.log(customer, index); //định nghĩa hàm
});

// function a(name) {
//   console.log(name);
// }

// a("Hoàng An");

var numbers = [5, 3, 8, 10];
var total = 0;
numbers.forEach2(function (number, index) {
  total += number;
});

console.log(total);

//Viết 1 prototype trả về các số chẵn của 1 mảng
Array.prototype.getValueCondition = function (handler) {
  var arr = this;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var status = handler(arr[i]);
    if (status) {
      result.push(arr[i]);
    }
  }

  return result;
};
var numbers = [5, 3, 8, 10, 20];
var evenArr = numbers.getValueCondition(function (number) {
  return number % 2 !== 0;
});
console.log(evenArr);
