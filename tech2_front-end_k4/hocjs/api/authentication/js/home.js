//Kiểm tra trạng thái đăng nhập
if (!localStorage.getItem("loginToken")) {
  window.location.href = "login.html";
}

var profileEl = document.querySelector(".profile");

var serverApi = `https://43jf2n-8080.csb.app`;

//Lấy thông tin user đăng nhạp

var getProfile = async function () {
  var token = localStorage.getItem("loginToken");
  var response = await fetch(`${serverApi}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    var user = await response.json();
    profileEl.innerHTML = `Chào bạn ${user.name}, <a href="#">Đăng xuất</a>`;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  getProfile();
});

profileEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Bạn có chắc chắn?")) {
    localStorage.removeItem("loginToken");
    window.location.reload();
  }
});
