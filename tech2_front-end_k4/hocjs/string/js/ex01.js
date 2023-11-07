var fullname = `Hoàng An`;
var age = `31`;
var number = 50;
var a;

if (typeof fullname === "string") {
  console.log(`Kiểu chuỗi`);
} else {
  console.log(`Không phải kiểu chuỗi`);
}

console.log("=======================");

//Ép kiểu
number = number.toString(); //number giống như 1 object

if (typeof number === "string") {
  console.log(`Kiểu chuỗi`);
} else {
  console.log(`Không phải kiểu chuỗi`);
}

console.log("=======================");

console.log(fullname.length);
console.log(fullname.slice(0, 3));

var customer = new String(`Nguyễn Văn A`);

console.log(customer.slice(0, 3));

console.log([Array]);
