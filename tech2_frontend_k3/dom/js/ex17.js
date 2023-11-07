var menuItems = document.querySelectorAll("header nav li a");
var nav = document.querySelector("header nav");
var navHeight = nav.offsetHeight;
menuItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var hash = item.getAttribute("href");

    var section = document.querySelector(hash);

    var sectionOffset = section.offsetTop - navHeight * 2;

    window.scrollTo(0, sectionOffset);
  });
});

var sectionPosition = [];
var sectionList = document.querySelectorAll(".content > section");
sectionList.forEach(function (section) {
  sectionPosition.push(section.offsetTop - navHeight * 2.5);
});

console.log(sectionPosition);

window.addEventListener("scroll", function () {
  var position = window.scrollY;
  console.log(position);
  var indexSelected = sectionPosition.findIndex(function (section, index) {
    if (index < sectionPosition.length - 1) {
      if (position >= section && position < sectionPosition[index + 1]) {
        return true;
      }
    } else {
      if (position >= section) {
        return true;
      }
    }
    return false;
  });

  if (indexSelected !== -1) {
    var activeItem = this.document.querySelector("header nav li a.active");
    activeItem.classList.remove("active");
    menuItems[indexSelected].classList.add("active");
  }
});

fetch("https://zingapi.vercel.app/api/top100")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
