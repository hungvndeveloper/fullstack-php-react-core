var progress = document.querySelector(".progress");
var progressBar = document.querySelector(".progress-bar");
var progressBarSpan = progressBar.querySelector("span");
var progressValue = document.querySelector(".progress-value");

//Gán cờ kiểm tra xem người có đang giữ chuột hay không?

var isMouseDown = false;
var initialClientX = 0;
var initialRate = 0;
var progressWidth = progress.clientWidth;

var handleUpdateProgressClick = function (e) {
  isMouseDown = true;

  //Xác định vị trí con trỏ chuột so với parent (.progress)
  var offsetX = e.offsetX;

  //Tính tỉ lệ phần trăm
  //rate = (offsetX / width của progress) * 100

  var rate = (offsetX / progressWidth) * 100;

  rate = Math.round(rate);

  progressBar.style.width = `${rate}%`;

  initialRate = rate;

  initialClientX = e.clientX;

  progressValue.innerText = `${rate}%`;
};

progress.addEventListener("mousedown", handleUpdateProgressClick);

document.addEventListener("mouseup", function () {
  isMouseDown = false;
  document.body.style.userSelect = "text";
});

document.addEventListener("mousemove", function (e) {
  //console.log(isMouseDown);
  if (isMouseDown) {
    //Vô hiệu hóa chọn văn bản
    document.body.style.userSelect = "none";
    var currentClientX = e.clientX;
    var spaceMove = currentClientX - initialClientX;

    var rate = (spaceMove / progressWidth) * 100;

    rate = rate + initialRate;

    rate = Math.round(rate);

    if (rate < 0) {
      rate = 0;
    }

    if (rate > 100) {
      rate = 100;
    }

    progressBar.style.width = `${rate}%`;

    progressValue.innerText = `${rate}%`;
  }
});

progressBarSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation(); //Chống nổi bọt thành phần html con
  isMouseDown = true;
});

/*
Mô phỏng hành động kéo thả
- Click chuột (mousedown)
- Giữ chuột và kéo (mousemove)
- Nếu thả chuột => Vô hiệu hóa hành động kéo

Để kiểm tra hành động giữ chuột của người dùng => Gắn 1 lá cờ

Xử lý khi kéo => cập nhật phần trăm của progress-bar

- Khi click chuột (Chưa thả) => Lấy tọa độ tại vị trí vừa click so với mép bên trái của body
*/
