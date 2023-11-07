//const height = window.innerHeight;

const app = document.querySelector(".app");

const getNotification = () => {
  const width = window.innerWidth;
  if (width <= 600) {
    app.innerHTML = "<h2>Chức năng này không hoạt động tên mobile</h2>";
  } else {
    app.innerHTML = "";
  }
};

//Khi lần đầu load trang
getNotification();

window.addEventListener("resize", getNotification);

/*
element.clientWidth;
*/

//window.open()

const button = document.querySelector(".open");
const close = document.querySelector(".close");

let url;
button.addEventListener("click", () => {
  url = window.open("https://www.google.com");
});

close.addEventListener("click", () => {
  url.close();
});

// document.addEventListener("click", (e) => {
//   console.log("ok");
//   const urls = [
//     "https://www.google.com",
//     "https://vnexpress.net",
//     "https://dantri.com",
//     "https://vietnamnet.vn",
//   ];

//   urls.forEach((url) => {
//     window.open(url, "", "width=400px,height=400px");
//   });
// });
