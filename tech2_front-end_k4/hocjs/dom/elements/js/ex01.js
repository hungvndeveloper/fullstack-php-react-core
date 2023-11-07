//5 cách để tạo element

//1. getElementById => Chỉ tác động vào element đầu tiên
var title = document.getElementById("title");
console.log(title);

//2. getElementsByTagName() => Tác động tất cả theo tên thẻ
var p = document.getElementsByTagName("p");
console.log(p);

//3. getElementsByClassName() => Tác động vào tất cả các thẻ class
var subTitle = document.getElementsByClassName("sub-title");
console.log(subTitle);

//4. querySelector() => Tác động vào thẻ đầu tiên theo css selector
var subTitle = document.querySelector(".sub-title");
console.log(subTitle);

//5. querySelectorAll() => Tác động vào tất cả thẻ  theo css selector
var subTitle = document.querySelectorAll(".sub-title");
console.log(subTitle);
