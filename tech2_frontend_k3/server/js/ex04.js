// fetch("http://localhost:3000/users")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//Async Function => Tạo ra function có từ khóa async phía trước
//Async function luôn trả về 1 promise

//Await => Dùng để gọi function => Đợi khi nào function đó chạy xong thì các đoạn code phía dưới function mới chạy tiếp
//Await chỉ hoạt động trong async function

var callApi = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

var getUsers = async function () {
  var response = await fetch("http://localhost:3000/users");
  var users = await response.json();
  return users;
};

//IIFE
(async function () {
  var users = await getUsers();
  console.log(users);
})();
