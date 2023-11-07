if (localStorage.getItem("userLogin")) {
  window.location.href = "ex07.html";
}

var loginForm = document.querySelector(".login");

var postLogin = async function (user) {
  var response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    var data = await response.json();

    if (data.accessToken) {
      localStorage.setItem("userLogin", data.accessToken);
      localStorage.setItem("userId", data.user.id);
      alert("Đăng nhập thành công");
      window.location.href = "ex07.html";
    }
  } else {
    alert("Email hoặc mật khẩu không chính xác");
  }
};

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var emailNode = this.querySelector('[name="email"]');
  var passwordNode = this.querySelector('[name="password"]');
  var email = emailNode.value;
  var password = passwordNode.value;

  postLogin({ email, password });

  emailNode.value = "";
  passwordNode.value = "";
});
