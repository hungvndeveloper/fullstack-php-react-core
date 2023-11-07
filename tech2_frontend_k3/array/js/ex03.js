console.log(Array.prototype);

var users = ["An", "Tùng", "Dạt", "Trường"];

// console.log(users);

users.sort(); //Sắp xếp tăng dần

users.reverse(); //Đảo ngược mảng

console.log(users);

var numbers = [5, 9, 1, 100];

numbers.sort(function (a, b) {
  //   if (a > b) {
  //     return 1;
  //   }

  //   return -1;

  return a - b; //tăng dần
});

console.log(numbers);

/*
Phương thức sort() có 1 đối số là 1 function (Có 2 tham số)
- Nếu function return số dương => số thứ 1 lớn hơn số thứ 2
- Nếu function return số âm => Số thứ 1 nhỏ hơn số thứ 2
*/

//Tham chiếu (Chỉ tồn tại trong kiểu dữ liệu array và object)
var customers = ["Hoàng An", 30];

//var newArr = customers.slice(); //clone array lưu vào biến newArr

var newArr = [...customers]; //clone array (spread operator)

newArr[0] = "Hoàng An Unicode";

console.log(customers);
console.log(newArr);

//Tham trị
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var name = customers[0];
// var age = customers[1];

var [name, age] = customers; //Destructuring

console.log(name, age);

var c = "Hoàng An";
function sayHi() {}
console.log(window);
