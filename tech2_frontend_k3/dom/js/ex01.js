console.log(document);
var body = document.body; //node
var bodyHtml = body.innerHTML;
console.log(bodyHtml);

var title = document.head;
console.log(title);

console.log(body.children);

var h1 = document.querySelector("h1"); //Tạo node
// h1.onclick = function () {
//   alert(1);
// };

h1.addEventListener("click", function () {
  alert(1);
});
