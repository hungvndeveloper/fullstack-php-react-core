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
    name: "Nguyễn <b onclick='alert(1)'>Văn E</b>",
    email: "nguyenvane@gmail.com",
  },

  {
    id: 6,
    name: "Tạ Hoàng An",
    email: "hoangan.web@gmail.com",
  },

  {
    id: 7,
    name: "Hoàng An Unicode",
    email: "hoangan@gmail.com",
  },
];

var renderUsers = function (users) {
  var tbody = document.querySelector("tbody");
  //reset tbody
  tbody.innerText = "";
  if (users.length) {
    users.forEach(function (user, index) {
      var tr = document.createElement("tr");
      tdNo = document.createElement("td");
      tdNo.innerText = index + 1;

      tr.append(tdNo);

      var tdName = document.createElement("td");
      tdName.innerText = user.name;
      tr.append(tdName);

      var tdEmail = document.createElement("td");
      tdEmail.innerText = user.email;
      tr.append(tdEmail);

      var tdEdit = document.createElement("td");
      var editBtn = document.createElement("a");
      editBtn.href = "#";
      editBtn.classList.add("btn", "btn-warning");
      editBtn.innerText = "Sửa";

      editBtn.addEventListener("click", function (e) {
        e.preventDefault();

        handleEdit(user.id);
      });

      tdEdit.append(editBtn);

      tr.append(tdEdit);

      var tdDelete = document.createElement("td");
      var deleteBtn = document.createElement("a");
      deleteBtn.href = "#";
      deleteBtn.classList.add("btn", "btn-danger");
      deleteBtn.innerText = "Xóa";

      deleteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        handleDelete(user.id);
      });

      tdDelete.append(deleteBtn);

      tr.append(tdDelete);

      tbody.append(tr);
    });
  } else {
    tbody.innerHTML = `<tr>
      <td colspan="5" class="text-center">Không có người dùng</td>
    </tr>`;
  }

  //tbody.innerHTML = trHtml;
};

renderUsers(users); //Gọi khi load trang xong

var newBtn = document.querySelector(".new-btn");

var newModalObj = document.getElementById("newModal");

var editModalObj = document.getElementById("editModal");

var newModal = new bootstrap.Modal(newModalObj, {});

var editModal = new bootstrap.Modal(editModalObj, {});

newBtn.addEventListener("click", function () {
  newModal.show(); //Mở modal
});

var newModalForm = newModalObj.querySelector("form");

var editModalForm = editModalObj.querySelector("form");

newModalForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var resetError = function () {
    errorName.innerText = "";
    errorEmail.innerText = "";
    nameObj.classList.remove("is-invalid");
    emailObj.classList.remove("is-invalid");
  };

  var resetInput = function () {
    nameObj.value = "";
    emailObj.value = "";
  };

  //Lấy dữ liệu các input
  var nameObj = this.querySelector('input[name="name"]');

  var emailObj = this.querySelector('input[name="email"]');

  var errorName = nameObj.nextElementSibling;

  var errorEmail = emailObj.nextElementSibling;

  var name = nameObj.value;

  var email = emailObj.value;

  var errors = {};

  //Xử lý validate form => Xác thực dữ liệu
  if (name.trim() === "") {
    errors.name = "Vui lòng nhập tên";
  }

  if (email.trim() === "") {
    errors.email = "Vui lòng nhập email";
  }

  //Kiểm tra biến errors:
  //- Không có dữ liệu => Không lỗi
  //- Có dữ liệu => Có lỗi

  //Reset thông báo lỗi
  resetError();

  if (Object.keys(errors).length === 0) {
    //Không có lỗi
    var user = {
      id: users.length + 1,
      name: name,
      email: email,
    };

    users.push(user);

    renderUsers(users);

    //Reset Input
    resetInput();
    //Đóng modal
    newModal.hide();
  } else {
    Object.keys(errors).forEach(function (fieldName) {
      if (fieldName === "name") {
        errorName.innerText = errors[fieldName];
        nameObj.classList.add("is-invalid");
      }

      if (fieldName === "email") {
        errorEmail.innerText = errors[fieldName];
        emailObj.classList.add("is-invalid");
      }
    });
  }

  newModalObj.addEventListener("hidden.bs.modal", function () {
    //Reset Input
    nameObj.value = "";
    emailObj.value = "";

    //Reset thông báo lỗi
    errorName.innerText = "";
    errorEmail.innerText = "";
    nameObj.classList.remove("is-invalid");
    emailObj.classList.remove("is-invalid");
  });
});

var handleEdit = function (id) {
  var isUpdate = false;

  //Show modal
  editModal.show();
  /*
  id => thông tin của 1 user

  */

  var user = users.filter(function (user) {
    return user.id == id;
  });

  if (user.length > 0) {
    user = user[0];
  }

  editModalForm.querySelector('input[name="name"]').value = user.name;
  editModalForm.querySelector('input[name="email"]').value = user.email;

  editModalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!isUpdate) {
      var resetError = function () {
        errorName.innerText = "";
        errorEmail.innerText = "";
        nameObj.classList.remove("is-invalid");
        emailObj.classList.remove("is-invalid");
      };

      //Lấy dữ liệu các input
      var nameObj = this.querySelector('input[name="name"]');

      var emailObj = this.querySelector('input[name="email"]');

      var errorName = nameObj.nextElementSibling;

      var errorEmail = emailObj.nextElementSibling;

      var name = nameObj.value;

      var email = emailObj.value;

      var errors = {};

      //Xử lý validate form => Xác thực dữ liệu
      if (name.trim() === "") {
        errors.name = "Vui lòng nhập tên";
      }

      if (email.trim() === "") {
        errors.email = "Vui lòng nhập email";
      }

      //Kiểm tra biến errors:
      //- Không có dữ liệu => Không lỗi
      //- Có dữ liệu => Có lỗi

      //Reset thông báo lỗi
      resetError();

      if (Object.keys(errors).length === 0) {
        //Không có lỗi

        //Xử lý cập nhật
        var index = users.findIndex(function (user) {
          return user.id == id;
        });

        if (index !== null && index !== undefined && index >= 0) {
          users[index] = {
            id: id,
            name: name,
            email: email,
          };
        }

        renderUsers(users);

        console.log(index);

        console.log(users);

        //Đóng modal
        editModal.hide();
      } else {
        Object.keys(errors).forEach(function (fieldName) {
          if (fieldName === "name") {
            errorName.innerText = errors[fieldName];
            nameObj.classList.add("is-invalid");
          }

          if (fieldName === "email") {
            errorEmail.innerText = errors[fieldName];
            emailObj.classList.add("is-invalid");
          }
        });
      }

      editModalObj.addEventListener("hidden.bs.modal", function () {
        //Reset thông báo lỗi
        errorName.innerText = "";
        errorEmail.innerText = "";
        nameObj.classList.remove("is-invalid");
        emailObj.classList.remove("is-invalid");
      });

      isUpdate = true;
    }
  });
};

var handleDelete = function (id) {
  if (confirm("Bạn có chắc chắn muốn xóa?")) {
    var index = users.findIndex(function (user) {
      return user.id == id;
    });

    users.splice(index, 1);

    renderUsers(users);
  }
};

var keywordObj = document.querySelector(".keyword");
keywordObj.addEventListener("keyup", function () {
  var keyword = this.value;

  keyword = keyword.toLowerCase();

  var search = users.filter(function (user) {
    var name = user.name.toLowerCase();

    return name.indexOf(keyword) !== -1 || user.email.indexOf(keyword) !== -1
      ? true
      : false;
  });

  renderUsers(search);
});
