var users = [
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
  },
  {
    name: "Nguyễn Văn B",
    email: "nguyenvanb@gmail.com",
  },
  {
    name: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
  },
  {
    name: "Nguyễn Văn D",
    email: "nguyenvand@gmail.com",
  },
];

var keyword = "";

//Dùng filter
if (keyword) {
  var search = users.filter(function ({ name }) {
    return name.toLowerCase().includes(keyword.toLowerCase());
  });
  var body = search
    .map(function ({ name, email }, index) {
      //console.log(user);
      return `<tr>
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${email}</td>
      </tr>`;
    })
    .join("");
} else {
  var body = users
    .map(function ({ name, email }, index) {
      //console.log(user);
      return `<tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${email}</td>
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
