//Toán tử và biểu thức

//1. Toán tử số học: +, -, *, /, % (Chia lấy phần dư), ** (Lũy thừa), phép tăng (++), phép giảm (--)

var a = 10;
var b = 5;

console.log(a % b);

//Phép tăng
var count = 0;
//count+=1; //count = count + 1
//count++;
//var total = 1 + 5 + 10 + count++; //Gán trước => Sau đó tăng biến đếm

//var total = 1 + 5 + 10 + ++count; //Tăng trước, sau đó gán vào biểu thức

// console.log(`Total: ${total}`);
// console.log(`Count: ${count}`);

// console.log(++count);

// console.log(5 ** 3);

//Toán tử kết hợp: &&, ||, ! 

var number = 10;

var check = !(number < 0 && number <=10);

console.log(check);