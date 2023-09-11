// Set your target date and time here (replace with your own date)
const targetDate = new Date("2023-09-30 08:00:00").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = padZero(days);
  document.getElementById("hours").textContent = padZero(hours);
  document.getElementById("minutes").textContent = padZero(minutes);
  document.getElementById("seconds").textContent = padZero(seconds);
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial countdown update
updateCountdown();
