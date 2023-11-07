var play = document.querySelector(".play");
var img = document.querySelector(".album img");

play.addEventListener("click", function () {
  if (img.classList.contains("playing")) {
    this.innerText = "Play";
    img.classList.add("speedup");

    setTimeout(function () {
      img.classList.remove("playing", "speedup");
    }, 500);
  } else {
    this.innerText = "Pause";
    img.classList.add("playing");
  }
});

/*
Slider
*/
