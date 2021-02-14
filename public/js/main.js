var currentCountdown = 0;
var timerDisplayElement = document.getElementById("timerDisplay");

function countdownTimer() {
    currentCountdown = currentCountdown - 1;
    timerDisplayElement.innerText = currentCountdown;
}

function startTimer() {
    currentCountdown = 20;
    setInterval(countdownTimer, 1000); 
}