//Variable: Lưu trữ dữ liệu

//Khai báo biến
//Đặt tên biến theo cú pháp camelCase
var customerName;
var users;
var user;

//Nếu chỉ khai báo biến => Trả kiểu kiểu dữ liệu undefined

//Gán biến

/*
Cách 1: Vừa khai báo vừa gán

Cách 2: Khai báo trước, gán sau

Gán biến tương ứng với 1 kiểu dữ liệu nhất định

- string => Chuỗi
- number => Số (Nguyên, thực)
- null
- undefined
- array
- object
- callable

Gán biến là 1 chuỗi html
*/

customerName = "Hoàng An";

console.log(customerName);

var welcome = "Xin chào Unicode";

console.log(welcome);

var html = "<h2>Khóa học JS</h2>";

console.log(html);

var age = 31;
console.log(age);

var info = welcome + " " + customerName; //Nối chuỗi

console.log(info);

var frontendExp = 1;
var backendExp = "1.9";

var totalExp = parseInt(frontendExp) + parseInt(backendExp);
//Ép kiểu dữ liệu khác về số nguyên: parseInt()
//Ép kiểu dữ liệu khác về số thực: parseFloat()

console.log("Tổng số kinh nghiệm: " + totalExp);

var companyName = 'Unicode'

// var lists = '<h2><a href="https://unicode.vn">'+companyName+'</a></h2>';
// lists = lists + '<h2>Khóa học JS</h2>';
//escape (\)

var lists = `<h2><a href="https://unicode.vn">${companyName}</a></h2>
<h2>Khóa học JS</h2>
a
b
`;

console.log(lists);

document.write(lists);
