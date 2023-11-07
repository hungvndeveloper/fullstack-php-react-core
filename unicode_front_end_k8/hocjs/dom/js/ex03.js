var users = [
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

  {
    id: 5,
    name: "Nguyễn Văn E",
    email: "nguyenvane@gmail.com",
  },
];

var renderUsers = function () {
  var trHtml = "";

  if (users.length) {
    users.forEach(function (user, index) {
      trHtml += `<tr>
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td><a href="#" class="btn btn-warning">Sửa</a></td>
    <td><a href="#" onclick="removeUser(${
      user.id
    })" class="btn btn-danger remove" data-id="${user.id}">Xóa</a></td>
  </tr>`;
    });
  }

  var tbody = document.querySelector("tbody");
  tbody.innerHTML = trHtml;
};

renderUsers(); //Gọi khi load trang xong

var removeUser = function (id) {
  console.log(id);
};

// var removeList = document.querySelectorAll(".remove");

// if (removeList.length) {
//   removeList.forEach(function (remove) {
//     remove.addEventListener("click", function () {
//       if (confirm("Are you sure?")) {
//         var id = parseInt(this.dataset.id);
//         //xóa mảng => splice(index, number)
//         var index = users.findIndex(function (user) {
//           return user.id == id;
//         });
//         users.splice(index, 1);
//         renderUsers();
//       }
//     });
//   });
// }
