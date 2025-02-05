const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');

let isPlaying = false;

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

// Seek functionality
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});