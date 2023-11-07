const audioElement = new Audio("./mp3/yeu-voi-vang-remix.mp3");
var timerRange = document.querySelector(".player__inner--timer input");
var durationNode = timerRange.nextElementSibling;
var currentTimeNode = timerRange.previousElementSibling;
var playerImage = document.querySelector(".player__image img");
var playNode = document.querySelector(".player__inner--actions span");
var playHtml = `<i class="fa-solid fa-play fa-2x"></i>`;
var pauseHtml = `<i class="fa-solid fa-pause fa-2x"></i>`;

var duration = null;

var isSeeking = false;

var getTime = function (seconds) {
  seconds = Math.round(seconds);

  var mins = Math.floor(seconds / 60);

  seconds -= mins * 60;

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audioElement.addEventListener("loadeddata", function () {
  duration = audioElement.duration;
  durationNode.innerText = getTime(duration);
});

playNode.addEventListener("click", function () {
  if (audioElement.paused) {
    audioElement.play();
    this.innerHTML = pauseHtml;
    playerImage.classList.add("playing");
  } else {
    audioElement.pause();
    this.innerHTML = playHtml;
    playerImage.classList.add("speedup");

    setTimeout(function () {
      playerImage.classList.remove("playing", "speedup");
    }, 500);
  }
});

audioElement.addEventListener("timeupdate", function () {
  //Đổi currentTime => Phần trăm
  var currentTime = this.currentTime;
  var rate = (currentTime / duration) * 100;

  if (!isSeeking) {
    timerRange.value = rate;

    currentTimeNode.innerText = getTime(currentTime);
  }
});

timerRange.addEventListener("change", function () {
  var rate = this.value;
  var currentTime = (rate / 100) * duration; //chuyển phần trăm => currentTime
  audioElement.currentTime = currentTime; //update currentTime mới vào audio
  isSeeking = false;
});

timerRange.addEventListener("input", function () {
  var rate = this.value;
  var currentTime = (rate / 100) * duration; //chuyển phần trăm => currentTime
  currentTimeNode.innerText = getTime(currentTime);
  isSeeking = true;
});

audioElement.addEventListener("ended", function () {
  playNode.innerHTML = playHtml;
  audioElement.currentTime = 0;
});
