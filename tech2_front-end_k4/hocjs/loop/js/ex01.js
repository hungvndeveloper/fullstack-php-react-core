// //vòng lặp for tăng
// for (var i = 1; i <= 10; i++){
//     console.log('Xin chào Javascript: '+i);
// }

// //vòng lặp for giảm
// for (var i = 10; i >= 1; i--){
//     console.log('Xin chào Javascript: '+i);
// }

//S = 1 + 2 + 3 +..+N

// var n = 1000;
// var total = 0;
// for (var index = 1; index <= n; index++){
//     total+=index;
// }
// console.log(`Tổng = ${total}`);

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

var td = "";

for (var rows = 1; rows <= 8; rows++) {
  td += `<tr>`;

  for (var cols = 1; cols <= 8; cols++) {
    var total = cols + rows;

    td += `<td class="${total % 2 !== 0 ? "black" : ""}"></td>`;
  }

  td += `</tr>`;
}

var html = `<table width="100%" border="1">
${td}
</table>`;

document.write(html);
