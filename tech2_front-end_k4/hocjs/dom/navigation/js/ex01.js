var btn = document.querySelector(".btn");
var current = null; //biến toàn cục
btn.addEventListener("click", function () {
  if (current === null) {
    current = this;
  }

  var parent = current.parentElement;
  current = parent;

  console.log(parent);
});

var btnChild = document.querySelector(".btn-child");
var lists = document.querySelector(".lists");
btnChild.addEventListener("click", function () {
  var child = lists.children;
  console.log(child);
  //   Array.from(child).forEach(function (item) {
  //     console.log(item.children);
  //   });
});
