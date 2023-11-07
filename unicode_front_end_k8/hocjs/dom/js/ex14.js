var body = document.querySelector("html, body");
var header = document.querySelector(".header");
var backtotop = document.querySelector(".backtotop button");

//Lấy chiều cao header inner
var headerInnerHeight = document.querySelector(
  ".header .header__inner"
).clientHeight;

//Lấy chiều cao của header
var headerHeight = document.querySelector(".header").clientHeight;

//Lấy chiều cao menu
var navMenuHeight = header.querySelector(".menu").clientHeight;

window.addEventListener("scroll", function (e) {
  //lấy vị trí so với top

  var position = body.scrollTop;

  if (position >= headerInnerHeight) {
    header.classList.add("menu-fixed");
  } else {
    header.classList.remove("menu-fixed");
  }

  //hiển thị nút backtotop
  if (position >= headerHeight) {
    backtotop.classList.add("show");
  } else {
    backtotop.classList.remove("show");
  }
});

//Khi click vào nút backtotop

var animationScrollTo = function (postionTo = 0) {
  var position = body.scrollTop;
  var scrollInterval = setInterval(function () {
    position -= 50;

    body.scrollTop = position;

    if (position <= postionTo) {
      clearInterval(scrollInterval);
    }
  }, 10);
};

backtotop.addEventListener("click", function () {
  //console.log(body.scrollTop);
  animationScrollTo(0);
});

/*
Một số cách tạo animation khi scroll
1. Dùng css: scroll-behavior: smooth
2. Dùng javascript: Sử dụng hàm setInterval để làm delay quá trình di chuyển scroll
*/

var navMenu = header.querySelector(".menu ul");
navMenu.addEventListener("click", function (e) {
  e.preventDefault();

  var hash = e.target.getAttribute("href");

  var section = document.querySelector(hash);

  var postionTarget = section.offsetTop - (navMenuHeight + 30);

  document.querySelector("html").style.scrollBehavior = "smooth";

  body.scrollTop = postionTarget;
});

//Xử lý tự động active menu khi scroll đến các section tương ứng
var sectionList = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  var position = body.scrollTop;
  for (var i = 0; i < sectionList.length - 1; i++) {
    var section = sectionList[i];
    var sectionNext = sectionList[i + 1];
    var positionTarget = section.offsetTop - (navMenuHeight + 40);
    var positionTargetNext = sectionNext.offsetTop - (navMenuHeight + 40);
    if (position >= positionTarget && position < positionTargetNext) {
      var sectionId = section.id;
      var menuItem = navMenu.querySelector(
        `a[href="#${sectionId}"]`
      ).parentElement;

      var menuItemClass = menuItem.className;
      if (menuItemClass === "") {
        navMenu.querySelector("li.active").classList.remove("active");
        menuItem.classList.add("active");
      }
    }
  }

  //Xử lý item cuối cùng
  var lastSection = sectionList[sectionList.length - 1];
  var lastpositionTarget = lastSection.offsetTop - (navMenuHeight + 40);
  if (position >= lastpositionTarget) {
    var sectionId = lastSection.id;

    var menuItem = navMenu.querySelector(
      `a[href="#${sectionId}"]`
    ).parentElement;

    var menuItemClass = menuItem.className;
    if (menuItemClass === "") {
      navMenu.querySelector("li.active").classList.remove("active");
      menuItem.classList.add("active");
    }
  }
});

//Check hướng vuốt trên thiết bị di động
var lastY;
window.addEventListener("touchmove", function (e) {
  // console.log(e);
  var currentY = e.touches[0].clientY;
  if (currentY > lastY) {
    // moved down
    console.log("move down");
  } else if (currentY < lastY) {
    // moved up
    console.log("move up");
  }
  lastY = currentY;
});

//onload, domcontentloaded, lazy loading,...
