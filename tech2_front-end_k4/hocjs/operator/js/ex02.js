var a = 9;
var b = a >= 10 ? 'Ok': 'Not ok' //Toán tử 3 ngôi

//Biểu thức ? giá trị đúng: giá trị sai

console.log(b);

var check = null;

var c = check ?? 'Không xác định';

//Nếu check != undefined và check != null => Gán giá trị của biến check vào biến c, ngược lại gán giá trị sau dấu ?? vào biến c

console.log(c);

var check = 'An'; //Truthy

var d = check && 'Xin chào Unicode';

console.log(d);

//Truthy và Falsy

//Falsy:

/*
0, false, null, undefined, "", NaN
*/

//Truthy: Các trường hợp còn lại