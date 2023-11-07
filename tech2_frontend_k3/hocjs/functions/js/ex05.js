/*
Đệ quy => Gọi lại hàm đang định nghĩa
*/

var getTotal = function (n) {
  console.log(n);

  if (n > 1) {
    n += getTotal(n - 1);
  }

  return n;
};

console.log(getTotal(5));

//n = 5

/*
- n = 5 => 5 + 4 = 9 = n + getTotal(n - 1)
- n = 4 => 9 + 3 = 12
- n = 3 => 12 + 2 = 14
- n = 2 => 14 + 1 = 15
*/
