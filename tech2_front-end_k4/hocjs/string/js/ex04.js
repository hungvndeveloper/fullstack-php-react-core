var keyword = `Ipsum`;
var content = `
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, hoàng an a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, hoàng An from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
`;

var newContent = "";
var index = content.toLowerCase().indexOf(keyword.toLowerCase());
var last = null;
var count = 0;
while (index !== -1) {
  var first = content.slice(0, index);
  var last = content.slice(index + keyword.length);

  newContent = newContent.concat(
    `${first}<span>${content.slice(index, index + keyword.length)}</span>`
  );

  content = last;

  index = content.toLowerCase().indexOf(keyword.toLowerCase());

  count++;
}

if (last !== null) {
  content = newContent + content; //nội dung mới + nội dung còn thừa
}

// console.log(content);

var html = `
<h3>Từ khóa: ${keyword}</h3>
${content}
<p>Tìm thấy ${count} kết quả</p>
`;

document.write(html);

/*
content = 'đoạn văn 1 đoạn văn 2 đoạn văn 3'
Tìm thấy => Xóa nội dung từ đầu đến hết từ khóa tìm thấy
Lưu nội dung vừa xóa vào 1 biến khác
Tìm tiếp với nội dung còn lại => tìm thấy => xóa => lưu tiếp vào biến khác
Tìm tiếp với nội dung còn lại

Đến khi nào không tìm thấy => Dừng lại => Lấy nội dung chính là biến đã gán sau khi xóa
*/
