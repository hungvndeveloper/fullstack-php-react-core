//fetch() => Trả về 1 promise

//Request => Server xử lý => Response

/*
Request
- URL
- Method: get, post, put, patch, delete
- Header
- Body (Data, Payload)

Response
- Status: Trạng thái
- Header: Thông tin đi kèm
- Message: Nội dung trả về (html, json, text...)

-> Giao thức HTTP

Gửi yêu cầu: HTTP Request
Nhận phản hồi: HTTP Response
*/
var root = document.querySelector(".root");

fetch(`https://jsonplaceholder.typicode.com/users`, {
  method: "GET",
})
  .then(function (response) {
    //response => Thông tin và trạng thái của request
    return response.json();
    /*
    nếu gọi response.json() => Convert data từ json về object, array (Nếu data không phải json sẽ bị lỗi)
    nếu gọi response.text() => Trả về y nguyên data từ server
    */
  })
  .then(function (users) {
    root.innerHTML = users
      .map(function (user) {
        return `<div>
        <h2>${user.name}</h2>
        <h3>${user.email}</h3>
        </div>`;
      })
      .join("");
  });
