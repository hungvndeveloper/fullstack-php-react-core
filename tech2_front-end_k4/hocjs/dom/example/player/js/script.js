// var audio = document.querySelector("audio");

var audio = new Audio('yeu-voi-vang-remix.mp3');

var songName = 'Yêu vội vàng remix';

var player = document.querySelector(".player");

var playerAction = player.querySelector(".player__action span");

var durationEl = player.querySelector(".duration");

var currentEl = player.querySelector(".current");

var timer = player.querySelector(".timer input");

var volume = player.querySelector(".volume");

var playerImage = player.querySelector('.player__image');

var previewTimer = timer.nextElementSibling;

var playBtn = `<i class="fa-solid fa-play fa-2x"></i>`;

var pauseBtn = `<i class="fa-solid fa-pause fa-2x"></i>`;

var duration = 0;

var isSeeking = false;

var getTime = function (second) {
  second = Math.floor(second);
  var mins = Math.floor(second / 60);

  second -= mins * 60;

  return `${mins < 10 ? "0" + mins : mins}:${
    second < 10 ? "0" + second : second
  }`;
};

//Custom Event
var playingEvent;

var pauseEvent = new CustomEvent('pause');

playerAction.addEventListener("click", function () {

  if (audio.networkState!==1){
    alert('Đã có lỗi không thể phát nhạc');
    return;
  }

  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtn;
    player.dispatchEvent(playingEvent)
  } else {
    audio.pause();
    this.innerHTML = playBtn;

    player.dispatchEvent(pauseEvent);
  }
});

audio.addEventListener("loadeddata", function () {
  duration = audio.duration;
  durationEl.innerHTML = getTime(duration);

  playingEvent = new CustomEvent('playing', {
    detail: {
      name: songName,
      duration: audio.duration
    }
  });
});

audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;

  //Quy đổi currentTime => percent
  var rate = (currentTime / duration) * 100;

  if (!isSeeking) {
    timer.value = rate;

    currentEl.innerHTML = getTime(currentTime);
  }
});

timer.addEventListener("input", function () {
  isSeeking = true;

  //Quy đổi percent thành currentTime
  var currentTime = (this.value / 100) * duration;

  currentEl.innerHTML = getTime(currentTime);
});

timer.addEventListener("change", function () {
  var currentTime = (this.value / 100) * duration;
  isSeeking = false;
  audio.currentTime = currentTime;
});

volume.addEventListener("input", function () {
  this.nextElementSibling.innerHTML = `${this.value}%`;
  if (parseInt(this.value) === 0) {
    this.previousElementSibling.innerHTML =
      '<i class="fa-solid fa-volume-off"></i>';
  } else {
    this.previousElementSibling.innerHTML =
      '<i class="fa-solid fa-volume-high"></i>';
  }

  audio.volume = this.value / 100;
});

volume.previousElementSibling.addEventListener("click", function () {
  if (parseInt(audio.volume) > 0) {
    this.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
    audio.volume = 0;
    volume.value = 0;
    volume.nextElementSibling.innerHTML = `0%`;
  } else {
    this.innerHTML = ' <i class="fa-solid fa-volume-high"></i>';
    audio.volume = 1;
    volume.value = 100;
    volume.nextElementSibling.innerHTML = `100%`;
  }
});

audio.addEventListener('ended', function(){
  console.log('Kết thúc');
  playerAction.innerHTML = playBtn;
  timer.value = 0;
  player.dispatchEvent(pauseEvent);
})

var getCurrentTimeOver = function(offsetX){
  var timerWidth = timer.clientWidth;
  var currentTime = offsetX / timerWidth * duration;
  return getTime(currentTime);
}

timer.addEventListener('mousemove', function(e){
  previewTimer.classList.add('open');
  previewTimer.style.left = `${e.offsetX}px`;
  previewTimer.innerText = getCurrentTimeOver(e.offsetX);
});

timer.addEventListener('mouseout', function(){
  previewTimer.classList.remove('open');
})

//tự xây dựng 1 event tên: playing
var content = document.querySelector('.content');
player.addEventListener('playing', function(e){
  console.log(e);
  playerImage.classList.add('playing');
  content.style.color = 'red';
})

player.addEventListener('pause', function(){
  playerImage.classList.add('speedup');

  setTimeout(function(){
    playerImage.classList.remove('playing', 'speedup');
  }, 500);

  content.style.color = 'initial';
})