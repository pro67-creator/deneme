

function updateClock() {
  const now = new Date();
  let h = String(now.getHours()).padStart(2, "0");
  let m = String(now.getMinutes()).padStart(2, "0");
  let s = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();


let stopwatchInterval;
let swHours = 0, swMinutes = 0, swSeconds = 0;

function updateStopwatchDisplay() {
  const h = String(swHours).padStart(2, "0");
  const m = String(swMinutes).padStart(2, "0");
  const s = String(swSeconds).padStart(2, "0");
  document.getElementById("stopwatch").textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (stopwatchInterval) return;
  stopwatchInterval = setInterval(() => {
    swSeconds++;
    if (swSeconds === 60) {
      swSeconds = 0;
      swMinutes++;
    }
    if (swMinutes === 60) {
      swMinutes = 0;
      swHours++;
    }
    updateStopwatchDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  swHours = swMinutes = swSeconds = 0;
  updateStopwatchDisplay();
}


let countdownInterval;

function startCountdown() {
  const min = parseInt(document.getElementById("countdown-min").value);
  const sec = parseInt(document.getElementById("countdown-sec").value);
  let total = min * 60 + sec;
  const msg = document.getElementById("countdown-msg");

  if (total <= 0) {
    msg.textContent = "Süre 0 olamaz!";
    return;
  }

  msg.textContent = "";
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    document.getElementById("countdown").textContent = `${minutes}:${seconds}`;

    if (total === 0) {
      clearInterval(countdownInterval);
      msg.textContent = "⏰ Süre Doldu!";
    }

    total--;
  }, 1000);
}