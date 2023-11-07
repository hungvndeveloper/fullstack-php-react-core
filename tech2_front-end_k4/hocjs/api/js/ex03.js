var search = new URLSearchParams(window.location.search);

var id = search.get("id");

var formUpdate = document.querySelector(".form-update");

formUpdate.style.display = "none";

if (id) {
  //Lấy dữ liệu
  fetch(`https://43jf2n-8080.csb.app/customers/${id}`)
    .then(function (response) {
      formUpdate.style.display = "block";
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (user) {
      if (Object.keys(user).length) {
        formUpdate.querySelector('[name="name"]').value = user.name;
        formUpdate.querySelector('[name="email"]').value = user.email;
      }
    })
    .catch(function () {
      formUpdate.innerHTML = `<h2>User không tồn tại</h2>`;
    });

  formUpdate.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameEl = this.querySelector('[name="name"]');
    var emailEl = this.querySelector('[name="email"]');

    var name = nameEl.value;
    var email = emailEl.value;

    var data = {
      name,
      email,
    };

    // Đẩy dữ liệu lên server
    fetch(`https://43jf2n-8080.csb.app/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      console.log(response);
    });
  });
}
