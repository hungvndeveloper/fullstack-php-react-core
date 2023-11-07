document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".get");
  var btnSet = document.querySelector(".set");
  var link = document.querySelector(".content a");
  btn.addEventListener("click", function () {
    console.log(link.href);
    console.log(link.title);
    console.log(link.target);
    console.log(link.id);
    console.log(link.className);
    console.log(link.getAttribute("abc"));
    //console.log(link.getAttribute("data-count"));
    console.log(link.dataset.count); //data-count
  });

  btnSet.addEventListener("click", function () {
    link.href = "https://google.com";
    link.removeAttribute("target");
    link.setAttribute("abc", "Unicode");
    //link.setAttribute("data-count", "123");
    link.dataset.count = "123";
    link.dataset.id = "12";
    //data-animation-duration = "1s"
    link.dataset.animationDuration = "1s";
    link.dataset.animationDurationTimeout = "2s";
  });
});
