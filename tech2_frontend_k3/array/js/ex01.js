/*
Ví dụ: cộng 100 số khác nhau
- Tạo biến mảng: 100 phần tử
=> Mảng nó là kiểu dữ liệu phức hợp, bao gồm các kiểu dữ liệu khác nhau
Mảng trong Javascript: 
- Element => giá trị phần tử
- Index => Chỉ có 1 dạng (số), bắt đầu từ 0

Mảng ngoài chứa các kiểu dữ liệu nguyên thủy => Có thể chứa các kiểu dữ liệu phức hợp khác:
- array
- object

Mảng tuần tự

Mảng hỗn hợp => Không nên để thành dạng này
*/

const numbers = [1, 2, 3, 4, 5, 6];
// numbers[6] = 6;
// numbers[10] = 10;

// console.log(numbers);

// const customers = [
//   ["Hoàng An", "hoangan.web@gmail.com"],
//   ["Hoàng An 2", "hoangan.web@gmail.com"],
//   ["Hoàng An 3", "hoangan.web@gmail.com"],
// ];

// console.log(customers[1][0]);

//Các thao tác xử lý mảng

/*
1. Khai báo mảng

2. Thêm phần tử

3. Cập nhật phần tử

4. Xóa phần tử mảng

5. Duyệt mảng (Lọc, thay thế, chèn, sắp xếp....)
*/

//=> Khai báo mảng
const users = ["An", "Tuấn", "Quân", "Mạnh"]; //Khai báo mảng có giá trị ban đầu

const customers = []; //Khai báo mảng rỗng

//=> Thêm phần tử

users[users.length] = "Trường";
users[users.length] = "Minh";
users.push("Sơn");
users["name"] = "Unicode";

//Cập nhật phần tử mảng
//users[1] = "Tuấn 2";

//Xóa phần tử mảng
//users.splice(1, 1);
//delete users[1];

//Duyệt mảng
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

//Trả về index
for (var index in users) {
  console.log(index);
  //break;
  //console.log(users[index]);
}

console.log("=====");

//Trả về element
for (var user of users) {
  console.log(user);
}

console.log(users);
