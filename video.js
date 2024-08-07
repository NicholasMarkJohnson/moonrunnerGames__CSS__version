const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
const coverImg = document.getElementById("cover-img");

// Play and pause video
// toggleVideoStatus = () => (video.paused ? video.play() : video.pause());
toggleVideoStatus = function () {
  if (video.paused) {
    video.play(), coverImg.classList.add("hidden");
  } else {
    video.pause();
  }
};

// Update pause/play icon
updatePlayIcon = () =>
  video.paused
    ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');

// Update progress and timestamp
updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};

// Set video time to progress
setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

// Stop video
stopVideo = () => {
  video.currentTime = 0;
  video.pause();
  coverImg.classList.remove("hidden");
};

//Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress, addEventListener("change", setVideoProgress);
