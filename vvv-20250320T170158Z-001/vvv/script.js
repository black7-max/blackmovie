const songs = [
    { title: "Song 1", artist: "Artist 1", src: "song1.mp3", cover: "cover1.jpg" },
    { title: "Song 2", artist: "Artist 2", src: "song2.mp3", cover: "cover2.jpg" },
    { title: "Song 3", artist: "Artist 3", src: "song3.mp3", cover: "cover3.jpg" }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumCover = document.getElementById("album-cover");
const progressBar = document.getElementById("progress-bar");
let isPlaying = false;

function loadSong(index) {
    const song = songs[index];
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    albumCover.src = song.cover;
    audioPlayer.src = song.src;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

audioPlayer.addEventListener("timeupdate", () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

progressBar.addEventListener("input", () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Load the first song on start
loadSong(currentSongIndex);
