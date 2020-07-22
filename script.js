// Elements
const music = document.querySelector('audio');
const prevBtn = elementGetter('prev');
const playBtn = elementGetter('play');
const nextBtn = elementGetter('next');

// Check if song is playing
let isPlaying = false;

// Function to get elements by id
function elementGetter(id) {
  return document.getElementById(id);
}

// Function to Play Song
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Function to pause Song
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
