/*
Array là kiểu dữ liệu phức hợp (Có nhiều dữ liệu trong 1 biến)
*/

var users = [
    'An',
    'Đạt',
    'Tùng',
    'Tâm'
];

console.log(users);
console.log(users[0]);
console.log(users[1]);

//Kiểm tra số lượng phần tử trong mảng
let length = users.length;

console.log(length);

//Sửa phần tử trong mảng
users[0] = 'Anh';
console.log(users);

//Thêm mới
//users[users.length] = 'Văn';
users.push('Văn')
console.log(users);

//Xóa phần tử mảng
users.splice(0, 1)

console.log(users);

//Duyệt mảng
// for (var index = 0; index < users.length; index++){
//     console.log(users[index]);
// }

// for (var index in users){
//     console.log(users[index]);
// }

// for (var user of users){
//     console.log(user);
// }

/* 
Lưu ý: Mảng trong js chỉ chấp nhận key là số
*/

users['name'] = 'An';

console.log(users);

for (var index in users){
    console.log(users[index]);
}
