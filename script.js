const keys = document.querySelectorAll('.white,.black');
const audioElement = document.getElementById('audio');

// Mapping of note names to audio file URLs
const noteToAudio = {
  C: 'C4.mp3',
  D: 'D4.mp3',
  E: 'E4.mp3',
  F: 'F4.mp3',
  G: 'G4.mp3',
  A: 'A4.mp3',
  B: 'B4.mp3',
  C2: 'C5.mp3',
  D2: 'D5.mp3',
  E2: 'E5.mp3',
  F2: 'F5.mp3',
  G2: 'G5.mp3',
  A2: 'A5.mp3',
  B2: 'B5.mp3',
  C3: 'C6.mp3',
  D3: 'D6.mp3',
  E3: 'E6.mp3',
  F3: 'F6.mp3',
  G3: 'G6.mp3',
  A3: 'A6.mp3',
  B3: 'B6.mp3',
  Db: 'Db4.mp3',
  Eb: 'Eb4.mp3',
  Gb: 'Gb4.mp3',
  Ab: 'Ab4.mp3',
  Bb: 'Bb4.mp3',
  Db2: 'Db5.mp3',
  Eb2: 'Eb5.mp3',
  Gb2: 'Gb5.mp3',
  Ab2: 'Ab5.mp3',
  Bb2: 'Bb5.mp3',
  Db3: 'Db6.mp3',
  Eb3: 'Eb6.mp3',
  Gb3: 'Gb6.mp3',
  Ab3: 'Ab6.mp3',
  Bb3: 'Bb6.mp3',
  // Add more notes and their corresponding audio files
};

// Add click event listeners to piano keys
keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    if (note && noteToAudio[note]) {
      playSound(noteToAudio[note]);
    }
  });
});

// Function to play sound
function playSound(audioFile) {
  audioElement.src = audioFile;
  audioElement.play();
}