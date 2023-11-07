/*
S = 1 + 2 + 3 + ... + N
*/

var n = 10;
var i = 1;
var s = 0;
while (i <= n) {
  s += i;
  i++;
}
console.log(`Tổng = ${s}`);
