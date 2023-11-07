// var carousel = document.querySelector(".carousel");
// var carouselInner = carousel.querySelector(".carousel__inner");
// var carouselItems = carouselInner.children;
// var nextBtn = carousel.querySelector(".carousel__controls .next");
// var prevBtn = carousel.querySelector(".carousel__controls .prev");
// var carouselDots = carousel.querySelector(".carousel__dots");

// var position = 1;
// var widthTranslate = 0;

// var renderDots = function (position) {
//   var dotsHtml = "";
//   for (var index = 1; index <= carouselItems.length; index++) {
//     dotsHtml += `<span class="dot ${
//       position == index ? "active" : ""
//     }" data-position="${index}"></span>`;
//   }

//   carouselDots.innerHTML = dotsHtml;
// };

// var goCarouselItem = function (number) {
//   widthTranslate = 0 - (number - 1) * itemWidth;
//   carouselInner.style.transform = `translateX(${widthTranslate}px)`;
//   renderDots(number);
//   position = number;
// };

// //Lấy width của item
// var itemWidth = carouselInner.clientWidth;

// //Tính tổng width các item
// var totalWidth = carouselItems.length * itemWidth;

// //Set width cho carouselInner
// carouselInner.style.width = `${totalWidth}px`;

// //Bổ sung thuộc tính transition cho carouselInner
// carouselInner.style.transition = `all 0.4s linear`;

// //Bắt sự kiện click vào nút next

// nextBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (position < carouselItems.length) {
//     position++;
//     renderDots(position);
//     goCarouselItem(position);
//   }
// });

// prevBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (position > 1) {
//     position--;
//     renderDots(position);
//     goCarouselItem(position);
//   }
// });

// //Xử lý khi click vào dot item
// carouselDots.addEventListener("click", function (e) {
//   var position = e.target.dataset.position;
//   goCarouselItem(position);
// });

// //Render dots

// renderDots(1);

// //Autoplay
// setInterval(function () {
//   if (position < carouselItems.length) {
//     position++;
//     goCarouselItem(position);
//   }
// }, 3000);

/*
Trên trang web có nhiều slider
1. slider 01 => Có nav và dots
2. slider 02 => Có nav, không có dots

{
    nav: false,
    dots: false,
    navText: ["Prev", "Next"],
    autoplay: true,
    autoplayTimeout: 3000
}

*/

HTMLElement.prototype.carousel = function (options = {}) {
  var carousel = this;
  var carouselInner = carousel.querySelector(".carousel__inner");
  var carouselItems = carouselInner.children;
  var carouselControls = carousel.querySelector(".carousel__controls");

  var nextBtn = null;
  var prevBtn = null;
  if (options.nav) {
    var navText = ["Prev", "Next"];
    if (options.navText && Array.isArray(options.navText)) {
      navText = options.navText;
    }
    carouselControls.innerHTML = `<button class="prev">${navText[0]}</button>
    <button class="next">${navText[1]}</button>`;
    nextBtn = carouselControls.querySelector(".next");
    prevBtn = carouselControls.querySelector(".prev");
  }

  var carouselDots = carousel.querySelector(".carousel__dots");
  var position = 1;
  var widthTranslate = 0;
  var renderDots = function (position) {
    var dotsHtml = "";
    for (var index = 1; index <= carouselItems.length; index++) {
      dotsHtml += `<span class="dot ${
        position == index ? "active" : ""
      }" data-position="${index}"></span>`;
    }
    carouselDots.innerHTML = dotsHtml;
  };
  var goCarouselItem = function (number) {
    widthTranslate = 0 - (number - 1) * itemWidth;
    carouselInner.style.transform = `translateX(${widthTranslate}px)`;
    renderDots(number);
    position = number;
  };
  //Lấy width của item
  var itemWidth = carouselInner.clientWidth;
  //Tính tổng width các item
  var totalWidth = carouselItems.length * itemWidth;
  //Set width cho carouselInner
  carouselInner.style.width = `${totalWidth}px`;
  //Bổ sung thuộc tính transition cho carouselInner
  carouselInner.style.transition = `all 0.4s linear`;
  //Bắt sự kiện click vào nút next
  if (nextBtn !== null) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (position < carouselItems.length) {
        position++;
        renderDots(position);
        goCarouselItem(position);
      }
    });
  }

  if (prevBtn !== null) {
    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (position > 1) {
        position--;
        renderDots(position);
        goCarouselItem(position);
      }
    });
  }

  //Xử lý khi click vào dot item
  carouselDots.addEventListener("click", function (e) {
    var position = e.target.dataset.position;
    goCarouselItem(position);
  });
  //Render dots
  renderDots(1);
  //Autoplay
  setInterval(function () {
    if (position < carouselItems.length) {
      position++;
      goCarouselItem(position);
    }
  }, 3000);
};

document.querySelector("#slider01").carousel({
  nav: true,
  navText: ["Trước", "Sau"],
});

document.querySelector("#slider02").carousel();
