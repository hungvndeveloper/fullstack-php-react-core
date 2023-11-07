//Định nghĩa hàm
function getName(name) {
  console.log(`Xin chào: ${name}`);
}

function getTotal(numberA, numberB = 0) {
  //console.log(`Total = ${numberA + numberB}`); //Hàm không có giá trị trả về

  if (numberB !== 0) {
    var total = numberA + numberB; //total => biến cục bộ (Chỉ nằm trong phạm vi hàm)
    return total; //Hàm có giá trị trả về
  }

  return "Không tính được";
}

/**
 * Sau khi gọi return => Các nội dung bên dưới return sẽ không hoạt động
 */

//Gọi hàm
//window.getName("Hoàng An");

// var result = getTotal(10, 50);
// console.log(result);

var message = "Unicode";
function setMessage(value) {
  message = value;
}

function getMessage() {
  //var message; //Biến cục bộ
  return message; //Biến toàn cục
}

setMessage("Khóa học Front-End");

console.log(getMessage());

/*
Hàm con
Closure
Giải thuật đệ quy
- Tính tổng không dùng vòng lặp
- Hiển thị dãy số fibonaci
Hàm ẩn danh => function anonymous
ES6: Arrow function
*/

//anonymous function
var a = function () {
  return "ok";
};

console.log(a());

//Arrow function
var b = () => {
  return "ok2";
};

console.log(b());
