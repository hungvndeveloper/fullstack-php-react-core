var serverApi = `https://43jf2n-8080.csb.app`;

//Kiểm tra trạng thái đăng nhập
if (localStorage.getItem("loginToken")) {
  window.location.href = "index.html";
}

var loginForm = document.querySelector(".login");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = e.target.querySelector('[name="email"]').value;
  var password = e.target.querySelector('[name="password"]').value;
  postLogin({ email, password });
});

var postLogin = async function (data) {
  var response = await fetch(`${serverApi}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    var user = await response.json();
    var token = user.accessToken;
    localStorage.setItem("loginToken", token);
    window.location.href = "index.html";
  } else {
    alert(`Email hoặc mật khẩu không chính xác`);
  }
};
