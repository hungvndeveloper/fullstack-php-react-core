//Bài 1: Cho trước 1 email => Lấy ra username của email
//Ví dụ: hoangan.web@gmail.com => hoangan.web

var email = "contact@unicode.vn";

/*
B1: Tìm vị trí xuất hiện chữ @ => Dùng indexOf()
B2: Dùng slice để cắt chuỗi
*/

var position = email.indexOf("@");

var username = email.slice(0, position);

console.log(username);

//Bài 2: Giả lập chữ chạy karaoke

var insertAtPosition = function (content, text, position = 0) {
  if (position == 0) {
    return text + content;
  } else {
    return content.slice(0, position) + text + content.slice(position);
  }
};

var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
content = insertAtPosition(content, "<span>", 0);
content = insertAtPosition(content, "</span>", content.length);

content = content.replaceAll(" ", "</span> <span>"); //Thêm thẻ span vào mỗi khoảng trắng

var index = 0;
var interval = setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char == ">" && charNext !== " ") {
    var html = insertAtPosition(content, ' class="highlight"', index);

    document.querySelector("#app").innerHTML = html;
  }

  index++;

  if (index >= content.length) {
    // clearInterval(interval);
    index = 0;
  }
}, 50);

//Hiển thị lần đầu
document.querySelector("#app").innerHTML = content;
