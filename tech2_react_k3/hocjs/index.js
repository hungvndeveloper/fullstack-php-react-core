const userApi = `http://localhost:3004/users`;

const getUsers = async (filters = {}, limit = 10, page = 1) => {
  let params = `?_limit=${limit}&_page=${page}`;

  currentPage = page;

  if (Object.keys(filters).length) {
    params += "&" + new URLSearchParams(filters).toString(); //search params
  }

  const res = await fetch(userApi + params);
  if (res.ok) {
    const totalCount = res.headers.get("x-total-count"); //Tổng số bản ghi
    const maxPage = Math.ceil(totalCount / limit);

    const users = await res.json();
    const tbody = document.querySelector("tbody");
    if (tbody !== null) {
      tbody.innerHTML = "";
      if (users.length) {
        users.forEach(({ id, name, email, status }, index) => {
          const tr = document.createElement("tr");
          const tdNo = document.createElement("td");
          tdNo.innerText = index + 1;
          tr.appendChild(tdNo);

          const tdName = document.createElement("td");
          tdName.innerText = name;
          tr.appendChild(tdName);

          const tdEmail = document.createElement("td");
          tdEmail.innerText = email;
          tr.appendChild(tdEmail);

          const tdStatus = document.createElement("td");
          tdStatus.innerText = `${status == 1 ? "Active" : "Inactive"}`;
          tr.appendChild(tdStatus);

          const tdEdit = document.createElement("td");

          const btnEdit = document.createElement("a");
          btnEdit.href = "#";
          btnEdit.classList.add("btn", "btn-warning");
          btnEdit.innerText = "Sửa";

          btnEdit.addEventListener("click", (e) => {
            e.preventDefault();
            handleShowEdit(id);
          });

          tdEdit.appendChild(btnEdit);

          tr.appendChild(tdEdit);

          const tdDelete = document.createElement("td");

          const btnDelete = document.createElement("a");
          btnDelete.href = "#";
          btnDelete.classList.add("btn", "btn-danger");
          btnDelete.innerText = "Xóa";

          btnDelete.addEventListener("click", (e) => {
            e.preventDefault();
            handleDelete(id);
          });

          tdDelete.appendChild(btnDelete);
          tr.appendChild(tdDelete);

          tbody.appendChild(tr);
        });

        getPagination(page, maxPage);
      }
    }
  }
};

const getPagination = (currentPage, maxPage) => {
  const pagination = document.querySelector(".paginations");
  if (pagination !== null) {
    let paginationItem = "";
    for (let page = 1; page <= maxPage; page++) {
      paginationItem += `<li class="page-item ${
        page == currentPage ? "active" : ""
      }"><a class="page-link number" href="#">${page}</a></li>`;
    }

    pagination.innerHTML = `<ul class="pagination justify-content-end">
    ${
      currentPage > 1
        ? ' <li class="page-item"><a class="page-link prev" href="#">Trước</a></li>'
        : ""
    }
   
    ${paginationItem}
    ${
      currentPage < maxPage
        ? '<li class="page-item"><a class="page-link next" href="#">Sau</a></li>'
        : ""
    }
  </ul>`;

    let check = false; //Đặt cờ hiệu
    pagination.addEventListener("click", (e) => {
      e.preventDefault();
      if (!check) {
        if (e.target.classList.contains("number")) {
          const page = e.target.innerText;

          getUsers(filters, limit, page);
        }

        if (e.target.classList.contains("next")) {
          getUsers(filters, limit, currentPage + 1);
        }

        if (e.target.classList.contains("prev")) {
          getUsers(filters, limit, currentPage - 1);
        }
        check = true;
      }
    });
  }
};

const addUser = () => {
  const formAdd = document.querySelector("#addUser form");
  formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameObj = e.target.querySelector('[name="name"]');
    const emailObj = e.target.querySelector('[name="email"]');

    const name = nameObj.value;
    const email = emailObj.value;

    if (
      typeof name === "string" &&
      name.trim() !== "" &&
      typeof email === "string" &&
      email.trim() !== ""
    ) {
      const data = {
        name: name,
        email: email,
      };

      postUser(data);
    } else {
      alert("Vui lòng nhập đủ thông tin");
    }
  });
};

const postUser = async (data) => {
  const res = await fetch("http://localhost:3004/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const addModal = document.querySelector("#addUser .btn-close");
    addModal.click();
    getUsers(filters, limit, currentPage);
  }
};

const handleShowEdit = async (id) => {
  const res = await fetch(`${userApi}/${id}`);
  if (res.ok) {
    const user = await res.json();
    if (Object.keys(user).length) {
      //show modal
      const myModal = new bootstrap.Modal("#editUser", {
        keyboard: false,
      });
      myModal.show();

      const nameObj = document.querySelector('#editUser [name="name"]');
      const emailObj = document.querySelector('#editUser [name="email"]');

      const { name, email } = user;

      nameObj.value = name;
      emailObj.value = email;

      updateUser(id);
    }
  }
};

const updateUser = (id) => {
  const formUpdate = document.querySelector("#editUser form");
  formUpdate.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameObj = e.target.querySelector('[name="name"]');
    const emailObj = e.target.querySelector('[name="email"]');

    const name = nameObj.value;
    const email = emailObj.value;

    if (
      typeof name === "string" &&
      name.trim() !== "" &&
      typeof email === "string" &&
      email.trim() !== ""
    ) {
      const data = {
        name: name,
        email: email,
      };

      putUser(id, data);

      toastr.success("Cập nhật thành công!", "Thành công");
    } else {
      alert("Vui lòng nhập đủ thông tin");
    }
  });
};

const putUser = async (id, data) => {
  const res = await fetch(`${userApi}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const editModal = document.querySelector("#editUser .btn-close");
    editModal.click();
    getUsers(filters, limit, currentPage);
  }
};

const handleDelete = async (id) => {
  Swal.fire({
    title: "Bạn có chắn chắn?",
    text: "Nếu xóa bạn không thể khôi phục!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "OK, Xóa đi!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteUser(id);
    }
  });
};

const deleteUser = async (id) => {
  const res = await fetch(`${userApi}/${id}`, {
    method: "DELETE",
  });
  console.log(res);
  if (res.ok) {
    getUsers(filters, limit, currentPage);
    Swal.fire("Đã xóa!", "Người dùng đã bị xóa.", "success");
  } else {
    Swal.fire("Đã có lỗi!", "Bạn không thể thao tác vào lúc này.", "warning");
  }
};

const filterUsers = () => {
  const formFilters = document.querySelector(".form-filters");
  formFilters.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusText = e.target.querySelector('[name="status"]').value;
    const keyword = e.target.querySelector('[name="keyword"]').value;

    filters = { ...sort };

    if (statusText === "active" || statusText === "inactive") {
      const status = statusText === "active" ? 1 : 0;
      filters.status = status;
    }

    if (typeof keyword === "string" && keyword.trim() !== "") {
      filters.q = keyword;
    }

    getUsers(filters, limit);
  });
};

const sort = {
  _sort: "id",
  _order: "desc",
};

const limit = 3;

let filters = {};

let currentPage = 1;

getUsers(sort, limit, currentPage);
filterUsers();
addUser();

// document.querySelector(".content").addEventListener("click", () => {
//   document.querySelector(".content").innerHTML = `<button>Button</button>`;
//   document
//     .querySelector(".content")
//     .querySelector("button")
//     .addEventListener("click", () => {
//       console.log(this);
//     });
// });

// function test() {
//   Array.from(arguments).forEach(function (item) {
//     console.log(item);
//   });
// }

// test(1, 2, 3, 4, 5);
