var getHome = function () {
  //   var showAbout = function () {
  //     console.log("About us");
  //   };

  function showAbout() {
    console.log("About us");
    /*
    Hàm con sẽ sử dụng được
    - Biến toàn cục
    - Biến cục bộ của hàm cha
    - Tham số của hàm cha

    Thứ tự ưu tiên: 
    Biến cục bộ của hàm con => Biến cục bộ của hàm cha => Biến toàn cục
    */
  }

  showAbout();
};

getHome();

//Closure => React JS: Higher Order Component

var getProduct = function () {
  return function () {
    console.log("Product");
  };
};

var product = getProduct();

product();
