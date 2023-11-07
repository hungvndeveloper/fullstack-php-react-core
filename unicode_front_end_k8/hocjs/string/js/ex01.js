console.log(String.prototype);

//trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi

//trimStart(), trimLeft() => Loại bỏ khoảng trắng đầu chuỗi

//trimEnd(), trimRight() => Loại bỏ khoảng trắng cuối chuỗi

//includes() => Tìm chuỗi con trong chuỗi cha => Trả về trạng thái (true, false)

//concat() => Nối chuỗi

//match() => Cắt chuỗi dựa vào biểu thức chính quy (Regular Expression)

var str = 'Xin chào, số của tôi là 0388875179';

var phones = str.match(/0\d{9}/);

console.log(phones);