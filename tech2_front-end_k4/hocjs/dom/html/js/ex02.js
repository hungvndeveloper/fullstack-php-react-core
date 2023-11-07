var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var links = document.querySelector(".links");
var setBtn = document.querySelector(".set-attr");

btn.addEventListener("click", function () {
  var id = content.id;
  var classes = content.className; //lấy nội dung thuộc tính class
  //console.log(id, classes);
  var href = links.href;
  var title = links.title;
  var target = links.target;
  var src = links.src;
  console.log(`Href = ${href}`);
  console.log(`Title = ${title}`);
  console.log(`Target = ${target}`);
  console.log(`Src = ${src}`);
});

setBtn.addEventListener("click", function () {
  links.href = `https://unicode.vn`;
});
