//Tìm max, min

var numbers = [5, 10, 1, 8]
if (numbers.length){
    var max = numbers[0]; //Giả định phần tử lớn nhất là phần tử đầu tiên
    numbers.forEach(function(number){
       if (max < number){
        max = number
       }
    })

    //=> Kỹ thuật đặt lính canh

    console.log(max)
}

//Sắp xếp họ và tên
var customers = [
    'Tạ Hoàng An',
    'Nguyễn Văn Quân',
    'Nguyễn Thanh Bình',
    'Trần Dung'
]

var getName = function(fullname){
    var nameArr = fullname.split(' ');
    var firstname = nameArr[nameArr.length-1];
    return firstname
}

// console.log(String.prototype)
// console.log(getName('Tạ Hoàng An').charCodeAt(0))

// console.log(getName('Trần Thanh Bình').charCodeAt(0))


customers.sort(function(a, b){
    return getName(b).charCodeAt(0) - getName(a).charCodeAt(0)
})

console.log(customers)

/*
Thuật toán sắp xếp:
- Nổi bọt
- Chèn
- Chọn
*/