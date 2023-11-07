// getMessage();

// function getMessage() {
//   showAge();
// }

// function showAge() {
//   console.log("Tôi năm nay 31 tuổi");
// }

// /anonymous
// var getMessage = function () {
//   console.log("Tôi năm nay 31 tuổi");
//   showInfo();
// };

// var showInfo = function () {
//   console.log("xin chào unicode");
// };

// getMessage();

//rest parameter => Tham số cuối cùng
var total = function () {
  var result = 0;
  for (var index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
};

var result = total(1, 5, 9, 10, 20, 30, 90);

console.log(`Tổng = ${result}`);

//arguments chỉ tồn tại trong function truyền thống
//arguments không tồn tại trong arrow function

// var getMessage = () => {
//   console.log("xin chào");
// };

// getMessage();

// const getTotal = (a, b) => a + b; //return

// console.log(getTotal(10, 20));

//=> Arrow function không dùng để thay thế function truyền thống
