console.log(Array.prototype)

var users = [
    'An',
    'Đạt',
    'Tùng'
]

//var count = users.push('Quân', 'Văn')
/*
Phương thức push()
- Thêm phần tử vào cuối mảng
- Trả về tổng số lượng các phần tử của mảng sau khi thêm
*/

//var count = users.unshift('Quân', 'Văn');
/*
Thêm phần tử vào đầu mảng
*/

//var lastEl = users.pop();

/*
Xóa phần tử cuối cùng trong mảng và trả về phần tử vừa xóa
*/

//var firstEl = users.shift();
/*
Xóa phần tử đầu tiên trong mảng và trả về phần tử vừa xóa
*/

//users = users.concat(['Quân', 'Tâm'])
/*
Nối nhiều mảng thành 1 mảng hoặc nối phần tử vào trong mảng
*/

// var users = [
//     [
//         'Nguyễn Văn A',
//         'nguyenvana@gmail.com'
//     ],

//     [
//         'Nguyễn Văn B',
//         'nguyenvanb@gmail.com'
//     ],

//     [
//         'Nguyễn Văn C',
//         'nguyenvanc@gmail.com'
//     ]
// ]

// var index = users.findIndex(function(user){
//    return user[1] === 'nguyenvanc@gmail.com'
// })

// console.log(index)

var numbers = [1, 5, 4, 2, 0, 10]

var result = numbers.findLast(function(item) {
    return item > 2
})

console.log(result)

/*
findLast => Tìm ra kết quả cuối cùng thỏa mãn điều kiện
find => Tìm ra kết quả gần nhất thỏa mãn điều kiện
*/

//Xóa phần tử trong mảng
// /users.splice(0, 2);

//Cập nhật
users[1] = 'Tuấn'
console.log(users);

//Chuyển kiểu dữ liệu khác thành mảng

var p = document.getElementsByTagName('p')

p = Array.from(p);

p.forEach(function(item){
    console.log(item)
});

