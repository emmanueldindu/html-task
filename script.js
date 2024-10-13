
const video = document.querySelector('.background-video');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');


playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  }
});


pauseBtn.addEventListener('click', () => {
  if (!video.paused) {
    video.pause();
  }
});
