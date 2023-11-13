document.addEventListener('DOMContentLoaded', () => {
  function addClickListener(element) {
    let audio = new Audio(`audio/${element.dataset.audio}.mp3`);

    element.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
    });
  }
  document.querySelectorAll('.piano-key').forEach(addClickListener);
});
