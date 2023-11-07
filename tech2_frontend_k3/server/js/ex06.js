if (localStorage.getItem("userLogin")) {
  window.location.href = "ex07.html";
}

var registerForm = document.querySelector(".register");

var postRegister = async function (user) {
  var response = await fetch("http://localhost:3000/register", {
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
      alert("Đăng ký tài khoản thành công");
      window.location.href = "ex07.html";
    }
  } else {
    alert("Email đã bị trùng");
  }
};

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var nameNode = this.querySelector('[name="name"]');
  var emailNode = this.querySelector('[name="email"]');
  var passwordNode = this.querySelector('[name="password"]');

  var name = nameNode.value;
  var email = emailNode.value;
  var password = passwordNode.value;

  postRegister({ name, email, password });

  nameNode.value = "";
  emailNode.value = "";
  passwordNode.value = "";
});

//Kiểm tra trạng thái đăng nhập
if (localStorage.getItem("userLogin")) {
  console.log("Bạn đã đăng nhập");
}
