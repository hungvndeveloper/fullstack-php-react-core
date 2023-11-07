var app = document.querySelector(".app");

//Giả định là server
var redirect = function () {
  window.location.href = "http://google.com";
};
var user = {
  name: "Hoàng An <img src='fsdf' onerror='redirect()'/>",
  age: 31,
  location: "Hà Nội",
};

var h2 = document.createElement("h2");
h2.innerText = user.name;
app.appendChild(h2);

var pAge = document.createElement("p");
pAge.innerText = user.age;
app.appendChild(pAge);

var pLocation = document.createElement("p");
pLocation.innerText = user.location;
app.appendChild(pLocation);
