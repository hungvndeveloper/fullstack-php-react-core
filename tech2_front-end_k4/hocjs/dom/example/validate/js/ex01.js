var loginForm = document.querySelector(".login-form");

var isRequired = function (input) {
  if (input.length) {
    return true;
  }

  return false;
};

var isMin = function (input, min = 6) {
  if (input.length >= min) {
    return true;
  }

  return false;
};

var isEmail = function (input) {
  var emailPattern = /\w+@\w+\.\w+/;

  if (input.match(emailPattern)) {
    return true;
  }

  return false;
};

var messages = {};

var setMessage = (field, rule, message) => {
  messages[field] = messages[field] ?? {};

  messages[field][rule] = message;
};

var getMessage = (field) => {
  if (messages[field]) {
    var errorField = Object.keys(messages[field]);
    var firstErrorKey = errorField[0];
    return messages[field][firstErrorKey];
  }
  return "";
};

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  messages = {};

  //Lấy email, passsword
  var emailEl = this.querySelector('[name="email"]');
  var passwordEl = this.querySelector('[name="password"]');

  var email = emailEl.value;
  var password = passwordEl.value;

  //Validate

  if (!isRequired(email)) {
    setMessage("email", "required", "Email bắt buộc phải nhập");
  }

  if (!isEmail(email)) {
    setMessage("email", "email", "Email không đúng định dạng");
  }

  if (!isRequired(password)) {
    setMessage("password", "required", "Mật khẩu bắt buộc phải nhập");
  }

  if (!isMin(password, 6)) {
    setMessage("password", "min", "Mật khẩu bắt buộc phải từ 6 ký tự");
  }

  //hiển thị lỗi
  var errorEmailEl = emailEl.nextElementSibling;
  errorEmailEl.innerText = getMessage("email");

  var errorPasswordEl = passwordEl.parentElement.nextElementSibling;
  errorPasswordEl.innerText = getMessage("password");
});

//Show/Hide password
var showPasswordEl = loginForm.querySelector(".show-password");
showPasswordEl.addEventListener("click", function () {
  var passwordEl = this.previousElementSibling;
  if (passwordEl.type === "password") {
    this.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    passwordEl.type = "text";
  } else {
    passwordEl.type = "password";
    this.innerHTML = `<i class="fa-sharp fa-regular fa-eye-slash"></i>`;
  }
});
