console.log(Array.prototype);

var numbers = [5, 3, 100, 7, 9, 3, 2];

console.log(numbers);

//Yêu cầu: Kiểm tra mảng numbers có số chẵn không?

var check = numbers.some(function(number){
    return number % 2 == 0 ? true : false
})

console.log(check);

//Yêu cầu: Kiểm tra mảng numbers xem tất cả các phần tử có phải số lẻ không
var check = numbers.every(function(number){
    return number % 2 !==0;
})

console.log(check);

//Lấy ra các phần tử có giá trị >=5
var result = numbers.filter(function(number){
    return number >= 5;
})

console.log(result);

//Trả về kết quả gần nhất thỏa mãn
var result = numbers.find(function(number){
    return number != 5;
})

console.log(result);

//Kiểm tra phần tử trong mảng

var index = numbers.lastIndexOf(3);
console.log(index);

// var numbersOutput = numbers.map(function(number){
//     return `<p>Số thứ: ${number}</p>`
// })

// document.write(numbersOutput.join(''));

//numbers.sort(); //Sắp xếp tăng dần

//numbers.reverse();

numbers.sort(function(a, b){
    return b - a;
})

console.log(numbers);

console.log('====')
//Hàm reduce
var result = numbers.reduce(function(total, number){
    return total+number;
}, 0)

console.log(result);
