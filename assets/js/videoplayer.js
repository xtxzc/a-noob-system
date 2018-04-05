function Player() {
  const wrapper = document.querySelector('.player-wrapper');
  const player = document.querySelector('#player');
  const playBtn = document.querySelector('.play-pause');

  playBtn.addEventListener('click', function() {
    if (wrapper.classList.contains('js-paused')) {
      wrapper.classList.remove('js-paused');
      wrapper.classList.add('js-playing');
      player.play();
    } else if (wrapper.classList.contains('js-playing')) {
      wrapper.classList.remove('js-playing');
      wrapper.classList.add('js-paused');
      player.pause();
    }
  });
}

const player = new Player();
player;
