/*
Vòng lặp for:

for (var tenbien = gia_tri_bat_dau; dieu_kien_dung; buoc_nhay){
    //Nội dung chương trình
}
*/

//Vòng lặp for tăng
for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    continue;
  }
  console.log("Tech2 " + i);
}

//Vòng lặp for giảm
// for (var i = 10; i > 0; i--) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

/*
Từ khóa trong vòng lặp 
- break => Dừng vòng lặp khi vòng lặp chưa chạy xong
+ Cải thiện hiệu năng
+ Đảm bảo tính đúng của chương trình

- continue => Bỏ qua lần lặp
*/

console.log("------------------");

//Bài tập: Tính tổng s = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 +.. +N

var n = 10;
var s = 0; //Biến giả định (tùy theo bài toán để chọn)
for (var i = 10; i > 0; i--) {
  s += i;
}

console.log(`Tổng = ${s}`);

//Tổng = 55

/*
Bài tập: Kiểm tra 1 số xem có phải là số nguyên tố hay không? 

Điều kiện 1: > 1 
Điều kiện 2: CHỈ chia hết cho 1 và chính nó

Phân tích: 
- Kiểm tra n <= 1 => Kết luận không phải số nguyên tố
- Ngược lại: Chạy vòng for từ 2 đến n - 1, nếu n chia hết cho bất kỳ số nào trong khoảng này => Không phải số nguyên tố
*/

var n = 10;
var check = true; //Giả định n là số nguyên tố
if (n <= 1) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}

if (check) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không là số nguyên tố`);
}

//=> Kỹ thuật đặt cờ hiệu
