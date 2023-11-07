var fibonaci = function (n) {
  //n số thứ tự
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
};

// console.log(fibonaci(1));
// console.log(fibonaci(2));
// console.log(fibonaci(3));
// console.log(fibonaci(4));
// console.log(fibonaci(5));
// console.log(fibonaci(6));
// console.log(fibonaci(7));

//Duyệt chương trình thủ công

/*
n = 5
fibonaci(4) + fibonaci(3)
fibonaci(3) + fibonaci(2) + fibonaci(2) + fibonaci(1)
fibonaci(2) + fibonaci(1) + 1 + 1 + 1
1 + 1 + 1 + 1 + 1
*/

var i = 1; //biến toàn cục
var result = ""; //biến toàn cục
var showFibonaci = function (n) {
  result += fibonaci(i) + " "; //gán kết quả fibonaci vào 1 biến để hiển thị
  //Điều kiện để đệ quy tiếp tục chạy
  if (i < n) {
    i++;
    showFibonaci(n);
  }
};

showFibonaci(15);
console.log(result);
