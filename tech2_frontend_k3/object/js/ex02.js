var customers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    email: "nguyenvanb@gmail.com",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
  },
  {
    id: 4,
    name: "Nguyễn Văn D",
    email: "nguyenvand@gmail.com",
  },
];

var keyword = "văn b";

//Hiển thị thông tin của khách hàng có email trong biến keywords

/*
Thông tin khách hàng: 
- Tên: 
- Email: 
- Id:
*/

// customers.forEach(function (customer) {
//   if (customer.email == keyword) {
//     console.log(customer);
//   }
// });
//=> Không nên dùng => Chạy hết vòng lặp

var search = customers.filter(function (customer) {
  keyword = keyword.toLowerCase();

  return (
    customer.email.toLowerCase().includes(keyword) ||
    customer.name.toLowerCase().includes(keyword)
  );
});

console.log(search);

var tr = "";
//Vỏng lặp => nối html vào biến tr
customers.forEach(function ({ name, email }, index) {
  tr += ` <tr>
  <td>${index + 1}</td>
  <td>${name}</td>
  <td>${email}</td>
</tr>`;
});

var html = `<table border="1" width="100%" cellpadding="0" cellspacing="0">
<thead>
    <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Email</th>
    </tr>
</thead>
<tbody>
   ${tr}
</tbody>
</table>`;
document.write(html);
/*
Hiển thị danh sách khách hàng lên giao diện dưới dạng table
*/
