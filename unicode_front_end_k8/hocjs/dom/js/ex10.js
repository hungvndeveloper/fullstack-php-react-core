var tabs = document.querySelector(".tabs");

var tabsNav = tabs.querySelectorAll(".tabs__nav .nav-item");

var isAnimation = tabs.dataset.animation;
if (isAnimation === "true" || isAnimation === "false") {
  isAnimation = isAnimation === "true" ? true : false;
}

var animationDuration = tabs.dataset.animationDuration;

animationDuration =
  animationDuration !== undefined ? parseInt(animationDuration) : 200;

tabsNav.forEach(function (tabNav) {
  tabNav.addEventListener("click", function (e) {
    e.preventDefault();
    var tabNavItem = this.parentElement;

    //Loại bỏ class active ở item đang active
    var tabNavItemActive = tabs.querySelector(".tabs__nav .active");
    tabNavItemActive.classList.remove("active");

    //add class active vào item vừa click
    tabNavItem.classList.add("active");

    var hash = this.getAttribute("href");

    if (hash === null || hash === "#") {
      hash = this.dataset.target;
    }

    if (hash !== undefined) {
      //Loại bỏ tab đang active
      var tabPanelActive = tabs.querySelector(
        ".tabs__content .tabs--panel.active"
      );

      tabPanelActive.classList.remove("active");

      var tabPanel = tabs.querySelector(`.tabs__content .tabs--panel${hash}`);
      tabPanel.classList.add("active");

      //Kiểm tra xem animation có được kích hoạt hay không?
      if (isAnimation) {
        //set transtions
        tabPanelActive.style.transitionDuration = animationDuration + "ms";
        tabPanel.style.transitionDuration = animationDuration + "ms";

        setTimeout(function () {
          tabPanelActive.classList.remove("show");
          tabPanel.classList.add("show");
        }, animationDuration);
      } else {
        tabPanelActive.classList.remove("show");
        tabPanel.classList.add("show");
      }
    }
  });
});
