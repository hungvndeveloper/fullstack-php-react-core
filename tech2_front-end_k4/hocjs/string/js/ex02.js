console.log(String.prototype);

var content = `xin chào, tôi là Hoàng An. Số phone của tôi là 0388875179, tôi có thêm 1 số nữa 0123456789 Hoàng An`;

//content = content.replace(/0\d{9}/g, `***`);

console.log(content.slice(0, 7)); //slice(start = bắt đầu từ 0, end = bắt đầu từ 1)

//Cắt 5 ký tự cuối chuỗi

console.log(content.slice(-5));

//Lấy từ ký tự có index = 10 đến hết chuỗi
console.log(content.slice(10));

var fullname = ` Tạ Hoàng An `;
console.log(fullname);
console.log(fullname.trim());
console.log(fullname.trimStart()); //giống trimLeft()
console.log(fullname.trimEnd()); //Giống trimEnd()
