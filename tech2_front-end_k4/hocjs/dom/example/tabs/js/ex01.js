var tabs = document.querySelector(".tabs");
var tabItems = tabs.querySelectorAll("ul li a");
if (tabItems.length) {
  tabItems.forEach(function (tab) {
    tab.addEventListener("click", function () {
      //Lấy element của item đang active
      var itemActive = tabs.querySelector("ul li a.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }

      //Thêm class active vào item vừa click
      this.classList.add("active");

      //Lấy id selector dựa vào href
      var hash = this.getAttribute("href");

      //Lấy element của tab panel đang active
      var tabPanelActive = tabs.querySelector(".tab-panel.active");
      if (tabPanelActive) {
        tabPanelActive.classList.remove("active");
      }

      //Tạo element từ id selector lấy được từ bước trên
      var tabPanel = tabs.querySelector(hash);

      //Add class active vào tab panel vừa click
      tabPanel.classList.add("active");
    });
  });
}
