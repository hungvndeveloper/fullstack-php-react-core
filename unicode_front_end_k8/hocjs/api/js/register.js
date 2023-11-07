var apiServerAuth = `http://localhost:3001`;

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
      if (typeof response === "object") {
        window.location.href = "/index.html";
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
      }
    });
}

var loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = this.querySelector('[name="name"]').value;
  var email = this.querySelector('[name="email"]').value;
  var password = this.querySelector('[name="password"]').value;

  if (name && email && password) {
    var button = this.querySelector("button");
    var initialButtonText = button.innerText;
    button.innerText = "Đang xử lý...";
    button.disabled = true;
    fetch(`${apiServerAuth}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        button.innerText = initialButtonText;
        button.disabled = false;
        console.log(response);

        if (typeof response === "object") {
          var accessToken = response.accessToken;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("user_id", response.user.id);
          window.location.reload();
        } else {
          alert("Đăng ký không thành công! Vui lòng kiểm tra lại thông tin!");
        }
      });
  } else {
    alert("Vui lòng nhập email và password");
  }
});
