var getMins = function (seconds) {
  var mins = Math.floor(seconds / 60);
  var seconds = Math.floor(seconds - mins * 60);

  //Định dạng
  mins = mins < 10 ? "0" + mins : mins;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${mins}:${seconds}`;
};

var playBtn = `<i class="fa fa-play-circle" aria-hidden="true"></i>`;

var pauseBtn = `<i class="fa fa-pause-circle-o" aria-hidden="true"></i>`;

var volumeBtn = `<i class="fa fa-volume-up" aria-hidden="true"></i>`;

var mutedBtn = `<i class="fa fa-volume-off" aria-hidden="true"></i>`;

var audio = document.querySelector("audio");

var player = document.querySelector(".player");

var playerTimer = player.querySelector(".player__inner--timer");

var playerCurrentTime = playerTimer.querySelector("span:first-of-type");

var playerDuration = playerTimer.querySelector("span:last-of-type");

var playerRange = playerTimer.querySelector("input");

var playerAction = player.querySelector(".player__inner--action span");

var playerVolume = player.querySelector(".player__inner--volume");

var playerVolumeIcon = playerVolume.querySelector("span:first-of-type");

var playerVolumeRange = playerVolume.querySelector("input");

var playerVolumeValue = playerVolume.querySelector("span:last-of-type");

var playerImage = player.querySelector(".player__image img");

var timerBabel = player.querySelector(".timer-babel");

//Render 1 số thành phần mặc định
playerAction.innerHTML = playBtn;
playerVolumeIcon.innerHTML = volumeBtn;

var duration = 0;
var currentTime = 0;
var isSeek = false;

audio.addEventListener("loadedmetadata", function () {
  duration = audio.duration;
  playerDuration.innerText = getMins(duration);
});

playerAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playerAction.innerHTML = pauseBtn;
    playerImage.classList.add("playing");
  } else {
    audio.pause();
    playerAction.innerHTML = playBtn;
    playerImage.classList.add("speedup");
    setTimeout(() => {
      playerImage.classList.remove("playing", "speedup");
    }, 500);
  }
});

audio.addEventListener("timeupdate", function (e) {
  var currentTime = audio.currentTime;
  playerCurrentTime.innerText = getMins(currentTime);

  //Đổi currentTime => Phần trăm để chạy timer
  var rateTimer = (currentTime / duration) * 100;

  //Nếu đang tua => không update range
  if (!isSeek) {
    playerRange.value = rateTimer;
  }
});

playerRange.addEventListener("input", function () {
  var rateTimer = this.value;
  currentTime = (rateTimer / 100) * duration;

  //Quy đổi từ % => currentTime
  /*
    currentTime / duration = rateTimer / 100
    */

  playerCurrentTime.innerText = getMins(currentTime);

  isSeek = true; //Đang tua nhạc

  console.log("event input");
});

playerRange.addEventListener("change", function () {
  audio.currentTime = currentTime;
  isSeek = false; //Dừng tua nhạc
  console.log("event change");
});

playerRange.addEventListener("mousemove", function (e) {
  var currentTime = (e.offsetX / e.target.clientWidth) * duration;
  timerBabel.innerText = getMins(currentTime);
  timerBabel.style.left = `${e.offsetX}px`;
  timerBabel.style.display = "block";
});

playerRange.addEventListener("mouseleave", function () {
  timerBabel.style.display = "none";
});

playerVolumeRange.addEventListener("input", function () {
  var volume = this.value;
  playerVolumeValue.innerText = volume + "%";
  if (volume == 0) {
    playerVolumeIcon.innerHTML = mutedBtn;
  } else {
    playerVolumeIcon.innerHTML = volumeBtn;
  }

  audio.volume = volume / 100;
});

playerVolumeIcon.addEventListener("click", function () {
  if (audio.volume > 0) {
    audio.volume = 0;
    playerVolumeIcon.innerHTML = mutedBtn;
    playerVolumeValue.innerText = `0%`;
    playerVolumeRange.value = 0;
  } else {
    audio.volume = 1;
    playerVolumeIcon.innerHTML = volumeBtn;
    playerVolumeValue.innerText = `100%`;
    playerVolumeRange.value = 100;
  }
});

/*
Nếu thực hiện tua nhạc 
+ Không cập nhật currentTime vào thẻ audio => Nhạc vẫn phát bình thường
+ Không cập nhật Timer tự động => Do timeupdate event

Ý tưởng triển khai: 

1. Mặc định gán isSeek = false
2. Khi kéo range => isSeek = true
3. Khi dừng kéo => isSeek = false

Xây dựng chức năng điều khiển volume
- Volume trong audio chỉ nhận từ 0 đến 1
*/
