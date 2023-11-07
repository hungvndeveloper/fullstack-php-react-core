//Chạy câu lệnh khi thỏa mãn điều kiện

var age = 30;

//1 nhánh: chỉ có if

//2 nhánh
if (age >= 30){
    console.log('Đủ tuổi');
}else{
    console.log('Không đủ tuổi');
}

//Nhiều nhánh
var number = 10;
if (number < 0){
    console.log('Số âm');
}else if (number >= 0 && number <5){
    console.log('Số nhỏ');
}else if (number >= 5 && number < 10){
    console.log('Số trung bình');
}else{
    console.log('Số lớn');
}

//If else lồng nhau
var email = 'a', password = 'a';
if (email == '' || password == ''){
    if (email == ''){
        console.log('Vui lòng nhập email');
    }else{
        console.log('Vui lòng nhập password');
    }
}else{
    console.log('Thành công');
}

//Bài tập: Tính thuế thu nhập

/*
luong = 20000000

Tính thuế thu nhập theo công thức sau

Nếu luong < 7000000 => 5%
Nếu luong từ 7000000 đến 15000000 => 10%
nếu luong từ 15000000 trở lên => 15%
*/

var luong = 20000000;