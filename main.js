document.addEventListener('DOMContentLoaded', () => {
  function addClickListener(noteId, audioFileName) {
    let div = document.getElementById(noteId);
    let audio = new Audio(`audio/${audioFileName}.mp3`);

    if (div) {
      div.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
      });
    }
  }

  addClickListener('01', 'c');
  addClickListener('02', 'd');
  addClickListener('03', 'e');
  addClickListener('04', 'cis');
  addClickListener('05', 'dis');
  addClickListener('06', 'f');
  addClickListener('07', 'g');
  addClickListener('08', 'a');
  addClickListener('09', 'h');
  addClickListener('10', 'fis');
  addClickListener('11', 'gis');
  addClickListener('12', 'ais');
});
