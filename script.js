// Elements
const image = getElem('img');
const title = getElem('#title');
const artist = getElem('#artist');
const music = getElem('audio');
const prevBtn = getElem('#prev');
const playBtn = getElem('#play');
const nextBtn = getElem('#next');

// Counter for current song
let currentSong = 0;

// Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];

// Check if song is playing
let isPlaying = false;

// Function to get elements by id
function getElem(id) {
  return document.querySelector(id);
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

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// On Load - Select First Song
loadSong(songs[currentSong]);

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Skip event listener
nextBtn.addEventListener('click', () => {
  currentSong < songs.length - 1 ? currentSong++ : (currentSong = 0);
  loadSong(songs[currentSong]);
  playSong();
});

// Previous event listener
prevBtn.addEventListener('click', () => {
  currentSong <= 0 ? (currentSong = songs.length - 1) : currentSong--;
  loadSong(songs[currentSong]);
  playSong();
});
