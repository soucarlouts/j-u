var audioPlayer = document.getElementById("audio-player");
var playButton = document.getElementById("play-audio");
var stopButton = document.getElementById("stop-audio");
var messageBox = document.getElementById("message-box");
var heartContainer = document.getElementById("heart-container");

function toggleAnimation() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = "Eu te amo";
    messageBox.style.display = "block";
    createHearts();
  } else {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playButton.textContent = "Muito";
    messageBox.style.display = "none";
    removeHearts();
  }
}

function createHearts() {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var numHearts = Math.floor(windowHeight / 50) * Math.floor(windowWidth / 50);

  for (var i = 0; i < numHearts; i++) {
    var heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.left = Math.random() * windowWidth + "px";
    heartContainer.appendChild(heart);
  }
}

function removeHearts() {
  while (heartContainer.firstChild) {
    heartContainer.removeChild(heartContainer.firstChild);
  }
};
   