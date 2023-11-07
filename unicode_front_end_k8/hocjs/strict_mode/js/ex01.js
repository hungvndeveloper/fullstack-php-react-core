//Kích hoạt strict mode => Thêm từ khóa "use strict" vào đầu file hoặc đầu hàm
//"use strict"; //active strict mode
const a = 10;
console.log(a);

const getName = () => {
  "use strict"; //active strict mode
  b = 20;
  console.log(b);
};

getName();
