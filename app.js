const btn = document.querySelector(".talk");
const audio = new Audio('speech.mp3');
const content = document.querySelector(".content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('voice is recorded');
  setTimeout(() => audio.play(), 1000);
};

recognition.onresult = function() {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  console.log(transcript);
};

btn.addEventListener('click', () => {
  recognition.start();
});
