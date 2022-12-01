const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

function playSong() {
  playButton.classList.add('hidden-button');
  pauseButton.classList.remove('hidden-button');

  audio.play();
}

function pauseSong() {
  pauseButton.classList.add('hidden-button');
  playButton.classList.remove('hidden-button');

  audio.pause();
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
