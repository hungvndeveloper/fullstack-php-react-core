//Thay thế trong Regex

//TH1: Thay thế pattern => Thành 1 chuỗi cố định

let str =
  "Xin chào, tôi là hoàng an. 0388875174 Số điện thoại của tôi là 0388875179.";

const pattern = /0[0-9]{9}/g;

str = str.replace(pattern, "***");

console.log(str);

let url = "/https://unicode.vn/khoa-hoc/";

url = url.replace(/\/$/, "").replace(/^\//, "");

console.log(url);

//TH2: Thay thế pattern => Đối sánh chuỗi

/*
Thay thế tất cả các số điện thoại trong 1 văn bản => Dạng có thẻ a
*/

let content = `Xin chào, tôi là hoàng an. 0388875174 Số điện thoại của tôi là 0388875179. Lorem Ipsum is simply dummy https://unicode.vn text of the printing and typesetting industry`;

/*
Xin chào, tôi là hoàng an. <a href="tel:0388875174">0388875174</a> Số điện thoại của tôi là <a href="tel:0388875179">0388875179</a>.
*/

const patternPhone = /(0[0-9]{9})/g;

content = content.replace(patternPhone, '<a href="tel:$1">$1</a>');

const patternLink =
  /((?:http|https):\/\/([a-z0-9]+(?:[a-z0-9-_]*|\.[a-z]{2,})\.[a-z]{2,}))/;

content = content.replace(
  patternLink,
  '<a target="_blank" href="$1">www.$2</a>'
);

document.querySelector(".app").innerHTML = content;
