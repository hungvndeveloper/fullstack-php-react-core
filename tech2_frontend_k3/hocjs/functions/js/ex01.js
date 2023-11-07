//Hàm không có tham số
//Hàm không có giá trị trả về
function showMessage(msg, type) {
  type = type ?? "success";
  /*
  if (type === undefined || type=== null) {
    type = 'success';
}    

  */

  console.log(msg, type);

  console.log("Hello World");
}

function getMessage(msg) {
  return msg;
}

showMessage("Tech2");
var message = getMessage("Xin chào Javascript") + "Front-End nền tảng";

console.log(message);

function getTotal(a, b) {
  if (b !== undefined) {
    var total = a + b;
    //total => Biến cục bộ: Chỉ sử dụng trong phạm vi hàm
    return total;
  }

  return "Không thể tính toán";
}

console.log(getTotal(1, 2));

var message = null; //Biến toàn cục

setMessage("Xin chào Front-End nền tảng");
console.log(message);

function setMessage(value) {
  //Sử dụng biến toàn cục (Không được phép khai báo)
  message = value;
  console.log(getTotal(5, 10));
}
