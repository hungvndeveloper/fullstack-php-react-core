// var index = 1;
// var total = 0;
// while (index <= 100) {
//   total += index;
//   index++; //biểu thức dừng vòng lặp
// }

// console.log(`Total = ${total}`);

// var index = 1;
// do {
//   console.log(index);
//   index++;
// } while (index > 10);

// for (index = 1; index <= 10; index++) {
//   console.log(index);
//   if (index == 5) break;
// }

/*
Từ khóa break: 

- Đảm bảo hiệu năng của chương trình
- Đảm bảo tính đúng

Ví dụ: Tìm số chẵn nhỏ nhất trong khoảng từ min đến max
*/

// var min = 1;
// var max = 20;
// var minEven = null;

// for (var index = min; index <= max; index++) {
//   if (index % 2 == 0) {
//     minEven = index;
//     break;
//   }
// }

// console.log(`Số chẵn nhỏ nhất: ${minEven}`);

for (var i = 1; i <= 10; i++) {
  //if (i == 5) continue
  if (i !== 5) {
    console.log(i);
  }
}
