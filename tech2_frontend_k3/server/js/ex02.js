var renderUsers = function () {
  var getUsers = fetch("http://localhost:3000/users?_sort=id&_order=desc");
  getUsers
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      var tbody = document.querySelector("tbody");
      var html = "";
      users.forEach(function (user, index) {
        html += `<tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>`;
      });
      tbody.innerHTML = html;
    });
};

//Render danh sách user lên table html
renderUsers();

var formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  var nameObj = this.querySelector('[name="name"]');
  var emailObj = this.querySelector('[name="email"]');

  var name = nameObj.value;
  var email = emailObj.value;

  var body = {
    name: name,
    email: email,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(function (response) {
    if (response.ok) {
      alert("User add Success");
      nameObj.value = "";
      emailObj.value = "";
      renderUsers();
    }
  });
});
