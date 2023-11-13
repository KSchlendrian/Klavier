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

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.piano-key').forEach((element) => {
//     element.addEventListener('click', playByClick);
//   });
// });

// function playByClick(event) {
//   const eventTarget = event.target.closest('.piano-key');

//   if ('audio' in element.dataset && element.dataset.audio.length > 0) {
//     let audio = new Audio(`audio/{$element.dataset.audio}.mp3`);

//     audio.currentTime = 0;
//     audio.play();
//   }
// }
