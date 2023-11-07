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
  var email = this.querySelector('[name="email"]').value;
  var password = this.querySelector('[name="password"]').value;

  if (email && password) {
    var button = this.querySelector("button");
    var initialButtonText = button.innerText;
    button.innerText = "Đang xử lý...";
    button.disabled = true;
    fetch(`${apiServerAuth}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

        if (typeof response === "object") {
          console.log(response);
          localStorage.setItem("token", response.accessToken);
          localStorage.setItem("user_id", response.user.id);
          window.location.reload();
        } else {
          alert("Email hoặc mật khẩu không chính xác");
        }
      });
  } else {
    alert("Vui lòng nhập email và password");
  }
});

fetch("https://reqres.in/api/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });
console.log("step");
