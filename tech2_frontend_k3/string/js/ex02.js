var email = "hoangan.web@gmail.com";

//Lấy ra username của email => hoangan.web
console.log(email.slice(0, email.indexOf("@")));

/*
Kiểm tra độ mạnh yếu của mật khẩu
- Độ dài >= 6
- Có ít nhất 1 ký tự viết hoa
- Có ít nhất 1 ký tự viết thường
- Có ít nhất 1 số 
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
*/
var password = "hOangan@123";

// var char = 'A';
// special.indexOf(char);

var checkLength = false;
var checkNumber = false;
var checkLower = false;
var checkUpper = false;
var checkSpecial = false;

if (password.length >= 6) {
  checkLength = true;

  var numbers = "0123456789";

  var special = "!@#$%^&*()";

  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);

    //Kiểm tra số
    if (numbers.indexOf(char) != -1) {
      checkNumber = true;
    }

    //Kiểm tra ký tự đặc biệt
    if (special.indexOf(char) != -1) {
      checkSpecial = true;
    }

    //Kiểm tra không phải là số và không phải là ký tự đặc biệt
    if (numbers.indexOf(char) === -1 && special.indexOf(char) === -1) {
      //Kiểm tra chữ hoa
      if (char == char.toUpperCase()) {
        checkUpper = true;
      }

      //Kiểm tra chữ thường
      if (char == char.toLowerCase()) {
        checkLower = true;
      }
    }
  }
}

if (checkLength && checkNumber && checkLower && checkUpper && checkSpecial) {
  console.log("Password is valid");
} else {
  console.log("Password is invalid");
}
