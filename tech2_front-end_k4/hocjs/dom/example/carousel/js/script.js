var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel__inner");

var carouselControls = carousel.querySelector(".carousel__controls");

var carouselControlsPrev = carouselControls.children[0];
var carouselControlsNext = carouselControls.children[1];

var carouselInnerWidth = carouselInner.clientWidth;

var carouselItems = carouselInner.children;

var totalWidth = carouselItems.length * carouselInnerWidth;

carouselInner.style.width = `${totalWidth}px`;
carouselInner.style.transition = `all 0.4s linear`;

var translateCarousel = function (position) {
  var positionWidth = 0 - carouselInnerWidth * position;
  carouselInner.style.transform = `translateX(${positionWidth}px)`;
};

var position = 0;

carouselControlsNext.addEventListener("click", function () {
  if (position === carouselItems.length - 1) {
    return;
  }
  position++;

  translateCarousel(position);
});

carouselControlsPrev.addEventListener("click", function () {
  if (position === 0) {
    return;
  }
  position--;

  translateCarousel(position);
});
