var apiServerAuth = `http://localhost:3001`;

var username = document.querySelector(".username");

//Check login

if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
  var token = localStorage.getItem("token");
  var userId = localStorage.getItem("user_id");

  fetch(`${apiServerAuth}/640/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (typeof response !== "object") {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");

        window.location.href = "/login.html";
      } else {
        username.innerText = response.name;
      }
    });
} else {
  window.location.href = "/login.html";
}

//var res = fetch("http://localhost:3000/users"); //trả về 1 promise

var addBtn = document.querySelector(".btn-add");

var addModal = new bootstrap.Modal("#add-modal");

var addModalObj = document.querySelector("#add-modal");

var editModal = new bootstrap.Modal("#edit-modal");

var editModalObj = document.querySelector("#edit-modal");

var filterForm = document.querySelector(".filters");

var paginationOutput = document.querySelector(".pagination-output");

var serverApi = `http://localhost:3000`;

var limit = 3; //số bản ghi trên 1 trang

var filters = {}; //Lưu trữ filters dạng toàn cục

var currentPage = 1;

var toast = function (message, type = "success") {
  if (type === "success") {
    var background = "linear-gradient(to right, #00b09b, #96c93d)";
  } else {
    var background = "red";
  }

  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: background,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

var getUsers = function (filters = {}, limit = 10, page = 1) {
  const sort = "_sort=id&_order=desc&_limit=" + limit + "&_page=" + page;

  if (Object.keys(filters).length) {
    var searchParams = new URLSearchParams(filters).toString();
    var apiUrl = `${serverApi}/users?${sort}&${searchParams}`;
  } else {
    var apiUrl = `${serverApi}/users?${sort}`;
  }

  var userCount = 0;

  fetch(`${apiUrl}`)
    .then(function (response) {
      //tính tổng số bản ghi
      userCount = response.headers.get("x-total-count");

      return response.json();
    })
    .then(function (users) {
      var tbody = document.querySelector(".users tbody");
      tbody.innerText = "";
      if (users.length > 0) {
        users.forEach(function (user, index) {
          var tr = document.createElement("tr");
          var tdNo = document.createElement("td");
          tdNo.innerText = index + 1;
          tr.appendChild(tdNo);

          var tdName = document.createElement("td");
          tdName.innerText = user.name;
          tr.appendChild(tdName);

          var tdStatus = document.createElement("td");
          tdStatus.innerHTML = user.status
            ? `<button class="btn btn-success">Kích hoạt</button>`
            : `<button class="btn btn-danger">Chưa kích hoạt</button>`;

          tr.appendChild(tdStatus);

          var tdEdit = document.createElement("td");

          var editBtn = document.createElement("button");
          editBtn.innerText = "Sửa";
          editBtn.classList.add("btn", "btn-warning");
          editBtn.addEventListener("click", function () {
            editUser(user);
          });
          tdEdit.appendChild(editBtn);

          tr.appendChild(tdEdit);

          var tdDelete = document.createElement("td");
          var deleteBtn = document.createElement("button");
          deleteBtn.innerText = "Xóa";
          deleteBtn.classList.add("btn", "btn-danger");
          deleteBtn.addEventListener("click", function () {
            deleteUser(user);
          });
          tdDelete.appendChild(deleteBtn);

          tr.appendChild(tdDelete);

          tbody.appendChild(tr);
        });

        //Xử lý phân trang

        //Tính số trang = tổng số bản ghi / số bản ghi trên 1 trang
        var maxPage = Math.ceil(userCount / limit);

        paginationOutput.innerText = "";
        var paginationUl = document.createElement("ul");
        paginationUl.classList.add("pagination", "justify-content-end");

        //prev button
        if (page > 1) {
          var paginationLi = document.createElement("li");
          paginationLi.classList.add("page-item");
          var pageLink = document.createElement("a");
          pageLink.classList.add("page-link");
          pageLink.href = "#";
          pageLink.innerHTML = "Trước";
          pageLink.addEventListener("click", function (e) {
            e.preventDefault();
            setPage(page - 1);
          });
          paginationLi.appendChild(pageLink);
          paginationUl.appendChild(paginationLi);
        }

        for (var i = 1; i <= maxPage; i++) {
          var paginationLi = document.createElement("li");
          paginationLi.classList.add("page-item");
          if (page === i) {
            paginationLi.classList.add("active");
          }

          var pageLink = document.createElement("a");
          pageLink.classList.add("page-link");
          pageLink.href = "#";
          pageLink.innerHTML = i;

          pageLink.addEventListener("click", function (e) {
            e.preventDefault();
            if (!e.target.parentElement.classList.contains("active")) {
              setPage(parseInt(e.target.innerText));
            }
          });

          paginationLi.appendChild(pageLink);
          paginationUl.appendChild(paginationLi);
        }

        //next button
        if (page < maxPage) {
          var paginationLi = document.createElement("li");
          paginationLi.classList.add("page-item");
          var pageLink = document.createElement("a");
          pageLink.classList.add("page-link");
          pageLink.href = "#";
          pageLink.innerHTML = "Sau";
          pageLink.addEventListener("click", function (e) {
            e.preventDefault();
            setPage(page + 1);
          });
          paginationLi.appendChild(pageLink);
          paginationUl.appendChild(paginationLi);
        }

        paginationOutput.appendChild(paginationUl);
      }
    });
};

var params = new URLSearchParams(window.location.search);
if (params.get("page")) {
  currentPage = parseInt(params.get("page"));
}

getUsers({}, limit, currentPage);

var setPage = function (page) {
  currentPage = page;

  getUsers(filters, limit, page);

  window.history.pushState({}, "", "?page=" + page);
};

addBtn.addEventListener("click", function (e) {
  addModal.show();
});

addModalObj.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = this.querySelector('[name="name"]').value;
  var status = this.querySelector('[name="status"]').value;

  const data = {
    name: name,
    status: status == 0 ? false : true,
  };

  //name=Hoangan&status=1

  var options = {
    method: "POST",
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //Convert object => json
    ///body: new URLSearchParams(data).toString(), //convert object => urlencoded (search params)
  };

  /*
  application/json
  application/x-www-form-urlencoded
  multipart/form-data => Upload file
  */

  fetch(`${serverApi}/users`, options).then((res) => {
    if (res.ok) {
      //Đóng modal
      addModal.hide();

      //Render table
      getUsers({}, limit);

      //Reset Form
      addModalObj.querySelector("form").reset();

      toast("Thêm thành công");
    } else {
      toast("Thêm thất bại", "error");
    }
  });
});

var editUser = function (user) {
  editModal.show();
  editModalObj.querySelectorAll("form .form-item").forEach(function (item) {
    var value = user[item.name];
    if (item.name === "status") {
      value = value == true ? 1 : 0;
    }
    item.value = value;
  });

  editModalObj.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = this.querySelector('[name="name"]').value;
    var status = this.querySelector('[name="status"]').value;

    const data = {
      name: name,
      status: status == 0 ? false : true,
    };

    var options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    };

    fetch(`${serverApi}/users/${user.id}`, options).then((res) => {
      if (res.ok) {
        //Đóng modal
        editModal.hide();

        //Render table
        getUsers({}, limit, currentPage);

        //Reset Form
        editModalObj.querySelector("form").reset();

        toast("Sửa thành công");
      } else {
        toast("Sửa thất bại", "error");
      }
    });
  });
};

var deleteUser = function (user) {
  Swal.fire({
    title: "Bạn có chắc chắn?",
    text: "Nếu bạn xóa thì không thể khôi phục!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ok, xóa liền đi!",
  }).then((result) => {
    if (result.isConfirmed) {
      //call api xóa
      fetch(`${serverApi}/users/${user.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          Swal.fire("Xong!", "Người dùng đã bị xóa.", "success");
          getUsers({}, limit); //Render table
        } else {
          Swal.fire("Lỗi!", "Người dùng xóa không thành công.", "error");
        }
      });
    }
  });
};

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var keyword = this.querySelector('[name="keyword"]').value;
  var statusText = this.querySelector('[name="status"]').value;

  //reset filters
  filters = {};

  if (statusText !== "all") {
    var status = statusText === "active" ? true : false;
    filters.status = status;
  }

  if (keyword !== "") {
    filters.q = keyword;
  }

  getUsers(filters, limit);
});

//Chức năng đăng xuất
var logout = document.querySelector(".logout");
logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  window.location.reload();
});

/*
Khi call api => Chờ server phản hồi => Xảy ra tình trạng bất đồng bộ
fetch() Trả về response và data
Nếu muốn lấy data => gọi đến hàm response.json() hoặc response.text()

Xử lý bất đồng bộ: async await
*/

// async function getUsers() {
//   const response = await fetch(`http://localhost:3000/users`);
//   const users = await response.json();
//   console.log(users);
//   console.log("Bước tiếp theo lần 2");
// }

// getUsers();
