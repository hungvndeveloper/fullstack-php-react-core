var formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  var nameEl = this.querySelector('[name="name"]');
  var emailEl = this.querySelector('[name="email"]');

  var name = nameEl.value;
  var email = emailEl.value;

  var data = {
    name,
    email,
  };

  //Đẩy dữ liệu lên server
  fetch("https://43jf2n-8080.csb.app/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(function (response) {
    console.log(response);
  });
});
