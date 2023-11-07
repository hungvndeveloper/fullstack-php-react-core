//Biến đổi và bất biến khi làm việc với Array, Object (Mutability Vs Immutability)
//=> Hay còn gọi là tham chiếu, tham trị

var a = {
  name: "Hoàng An",
  age: 30,
};

//var b = a;
//var b = { ...a };
//var b = Object.assign({}, a);
var aJson = JSON.stringify(a); //chuyển object thành json
var b = JSON.parse(aJson); //chuyển json thành object

b.name = "Unicode";

console.log(a);
console.log(b);

/*
Giải pháp: Sao chép object a và gán vào biến b sang 1 ô nhớ khác
1. Spread (ES6)
2. Object.assign()
3. JSON
*/

var a = ["Hoàng An", 30];

//var b = a;
//var b = [...a];
// var aJson = JSON.stringify(a); //chuyển array thành json
// var b = JSON.parse(aJson); //chuyển json thành array

var b = Array.from(a);

b[0] = "Unicode";

console.log(a);
console.log(b);

//Chỉ gặp phải với object, array trong Javascript

//JSON
/*
- Chuỗi
- Tạo từ array và object
- Cấu trúc dạng key: value
- Nó là 1 tiêu chuẩn và sử dụng ở hầu hết các ngôn ngữ lập trình 
(Convert từ object, array => Json và ngược lại)
*/

//Chuyển object, array => Json

var customers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];

var json = JSON.stringify(customers);

//Chuyển json thành object, array
var customers = JSON.parse(json);
console.log(customers);
