// Affiche un message quand on clique sur le bouton
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btnMessage');
    button.addEventListener('click', () => {
        alert('Severine, 2KM DE CHEZ TOI EST CHAUDE ! 🎉');
    });
});

const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = 'images/play.png';
const pauseIcon = 'images/pause.png';

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.querySelector('img').src = pauseIcon;
  } else {
    audio.pause();
    playPauseBtn.querySelector('img').src = playIcon;
  }
});
