const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const stopBtn = document.querySelector('.btn-stop');
const session = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let myInterval;
let totalSeconds;
let isRunning = false;

const updateDisplay = () => {
  const minutesLeft = Math.floor(totalSeconds / 60);
  const secondsLeft = totalSeconds % 60;

  session.textContent = minutesLeft;
  secondsDisplay.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};

const appTimer = () => {
  if (!isRunning) {
    isRunning = true;
    totalSeconds = Number.parseInt(session.textContent) * 60;

    myInterval = setInterval(() => {
      totalSeconds--;
      updateDisplay();

      if (totalSeconds <= 0) {
        clearInterval(myInterval);
        bells.play();
        isRunning = false;
      }
    }, 1000);
  } else {
    alert('Session has already started.');
  }
};

const pauseTimer = () => {
  if (isRunning) {
    clearInterval(myInterval);
    isRunning = false;
  }
};

const stopTimer = () => {
  clearInterval(myInterval);
  totalSeconds = 25 * 60;
  session.textContent = '25';
  secondsDisplay.textContent = '00';
  isRunning = false;
};

startBtn.addEventListener('click', appTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);
