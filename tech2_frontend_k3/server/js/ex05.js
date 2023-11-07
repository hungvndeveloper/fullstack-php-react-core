function debounce(fn, ms) {
  let timer;

  //Closure
  return function (...args) {
    // Nhận các đối số
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, ms);
  };
}

var search = document.querySelector(".search");

var handleSearch = debounce(function (keyword) {
  console.log("Call api:" + keyword);
}, 1000);

search.addEventListener("keyup", function (e) {
  var keyword = e.target.value;
  handleSearch(keyword);
});
