var title = document.querySelector(".title");

//Lấy nội dung thẻ html
var titleContent = title.innerHTML; //bao gồm cả các thẻ html

var titleContent = title.outerHTML; //bao gồm cả thẻ html hiện tại và nội dung

var titleContent = title.innerText; //bỏ các thẻ html

//console.log(titleContent);

//Cập nhật nội dung vào thẻ html
//title.innerHTML = "<i>Khóa học Front-End</i>";

//title.innerText = "<i>Khóa học Front-End</i>";

//Xóa nội dung trong thẻ html
//title.innerText = "";

//title.outerHTML = "";
//title.remove();

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var count = 0;
btn.addEventListener("click", function () {
  count++;
  content.innerHTML = `<h3>Unicode Academy - ${count}</h3>` + content.innerHTML;
});

//Làm việc với thuộc tính
var link = document.querySelector(".link");

//1. Lấy nội dung thuộc tính
var href = link.href;
var target = link.target;
var id = link.id;
var className = link.className;
var abc = link.getAttribute("abc");
console.log(`href = ${href}`);
console.log(`target = ${target}`);
console.log(`id = ${id}`);
console.log(`class = ${className}`);
console.log(`abc = ${abc}`);

//2. Thêm thuộc tính cho thẻ html
link.href = "https://unicode.vn";
link.target = "_blank";
link.id = "link01";
//link.className = "a123";
link.setAttribute("abc", "xyz");

//3. Data Attribute: data-*

// link.setAttribute("data-id", 1);
// console.log(link.getAttribute("data-id"));

console.log(link.dataset.bsId);

link.dataset.countAnimation = 10;
