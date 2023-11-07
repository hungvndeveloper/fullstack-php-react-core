var fullname = "Hoàng An";
var address = 'Tôi ở "Phú Thọ"'; //escape (\)
console.log(fullname);
console.log(address);

//Nối chuỗi: Dùng toán tử +

var a = 1;
var b = "2";
//Ép kiểu số
/*
- Số thực: parseFloat()
- Số nguyên: parseInt()
*/
var c = parseInt(a) + parseInt(b);
console.log(c);

var d = "123a";
console.log(parseInt(d));

/*
Chuỗi trong js được build từ Function Constructor có tên là String
*/
console.log(String.prototype);
//console.log(Array.prototype);
//console.log(Date.prototype);
//console.log(Number.prototype);

var str = " Hoàng An Unicode dạy lập trình Unicode ";
console.log(str.length); //Lấy độ dài của chuỗi
//indexOf() => Trả về vị trí chuỗi con trong chuỗi cha
console.log(str.indexOf("Unicode"));

//lastIndexOf() => Trả về vị trí cuối cùng của chuỗi con trong chuỗi cha
console.log(str.lastIndexOf("Unicode"));

//includes() => Tìm chuỗi con trong chuỗi cha (Trả về true, false)
console.log(str.includes("Unicode"));

//slice() => Cắt chuỗi theo index
console.log(str.slice(6, 10));

//split() => Chuyển chuỗi thành mảng dựa vào ký tự cắt

console.log(str.split(" "));

//replace() => Thay thế chuỗi
console.log(str.replace("Unicode", "Tech2"));

//replaceAll() => Thay thế tất cả
console.log(str.replaceAll("Unicode", "Tech2"));

/*
Hàm replace() hỗ trợ cả biểu thức chính quy (Regular Expression)
*/

var content = `xin chào, số điện thoại của tôi là +84388875179 và tôi có 1 số nữa 0123456789`;

//Thay thế tất cả các số điện thoại => ***

console.log(content.replace(/(0|\+84)\d{9}/g, "***"));

//toLowerCase() => Chuyển thành chữ thường
console.log(str.toLowerCase());

//toUpperCase() => Chuyển thành chữ hoa
console.log(str.toUpperCase());

//trim() => Xóa khoảng trắng đầu và cuối chuỗi
console.log(str.trim());

//charAt() => Lấy ký tự trong chuỗi dựa vào index
console.log(str.charAt(7));

//charCodeAt() => Lấy mã số của ký tự

console.log(str.charCodeAt(7));
