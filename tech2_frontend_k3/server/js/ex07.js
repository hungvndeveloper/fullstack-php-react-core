var app = document.querySelector(".app");
if (localStorage.getItem("userLogin")) {
  var getUser = async function () {
    var userId = localStorage.getItem("userId");
    var profileApi = `http://localhost:3000/660/users/${userId}`;
    var response = await fetch(profileApi, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userLogin")}`,
      },
    });

    if (response.ok) {
      var user = await response.json();
      var html = `Chào bạn ${user.name}, <a href="#" class="logout">Đăng xuất</a>`;
      app.innerHTML = html;
    } else {
      alert("Xác thực không hợp lệ");
      localStorage.removeItem("userLogin");
      window.location.reload();
    }
  };

  getUser();
} else {
  window.location.href = "ex08.html";
}

app.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("logout")) {
    if (confirm("Bạn có chắc chắn?")) {
      localStorage.removeItem("userLogin");
      window.location.reload();
    }
  }
});
