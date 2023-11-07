var serverApi = `https://43jf2n-8080.csb.app`;

//Kiểm tra trạng thái đăng nhập
if (localStorage.getItem("loginToken")) {
  window.location.href = "index.html";
}

var registerForm = document.querySelector(".register");
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = e.target.querySelector('[name="name"]').value;
  var email = e.target.querySelector('[name="email"]').value;
  var password = e.target.querySelector('[name="password"]').value;

  postRegister({ name, email, password });
});

var postRegister = async function (data) {
  var response = await fetch(`${serverApi}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    var user = await response.json();
    if (user.accessToken) {
      //Đăng ký thành công
      window.location.href = "login.html";
    }
  } else {
    alert("Email đã được sử dụng");
  }
};
