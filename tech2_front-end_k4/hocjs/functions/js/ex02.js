//Đồng bộ: Chạy tuần tự từ trên xuống dưới
//Bất đồng bộ: Chạy tất cả cùng 1 lúc

//ham1() => Chạy 30p
//ham2() => Chạy 1p

//=> JS là ngôn ngữ lập trình bất đồng bộ

function total(a) {
  //   function showResult() {
  //     //Biến cục bộ của function con
  //     //console.log(`Kết quả: ${c}`);
  //   }

  function make(b) {
    return a + b;
  }

  return make;
}

var result1 = total(10);

console.log(result1(30));

// var resutl = result1(20);
// showResult();

/*
Kế thừa:
- Tham số function cha
- Biến cục bộ của function cha
- Kế thừa biến toàn cục
- Delay 1 hành động

Cục bộ function con => Cục bộ function cha => Toàn cục
*/
