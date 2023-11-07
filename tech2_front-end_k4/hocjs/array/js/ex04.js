var users = [
  ["Nguyễn Văn A", "nguyenvana@gmail.com"],
  ["Nguyễn Văn B", "nguyenvanb@gmail.com"],
  ["Nguyễn Văn C", "nguyenvanc@gmail.com"],
  ["Nguyễn Hoàng Anh", "nguyenhoanganh@gmail.com"],
  ["Nguyễn Văn D", "nguyenvand@gmail.com"],
  ["Hoàng An", "hoangan@gmail.com"],
];

var keyword = "HOÀNG AN";

//Tìm kiếm theo tên => trả về danh sách khớp với từ khóa

//Dùng filter
if (keyword) {
  var search = users.filter(function (user) {
    return user[0].toLowerCase().includes(keyword.toLowerCase());
  });
  var body = search
    .map(function (user, index) {
      console.log(user);
      return `<tr>
    <td>${index + 1}</td>
    <td>${user[0]}</td>
    <td>${user[1]}</td>
    </tr>`;
    })
    .join("");
} else {
  var body = users
    .map(function (user, index) {
      console.log(user);
      return `<tr>
      <td>${index + 1}</td>
      <td>${user[0]}</td>
      <td>${user[1]}</td>
      </tr>`;
    })
    .join("");
}

var html = `<table width="100%" border="1">
<thead>
  <tr>
    <th width="5%">STT</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
</thead>
<tbody>
    ${body}
</tbody>
</table>`;

document.write(html);
