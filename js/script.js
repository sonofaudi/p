const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});




const liveTime = document.getElementById('liveTime');

function updateClock() {
  const now = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format();
  liveTime.textContent = now; // e.g. “Wed 16 Oct 2025 14:37:08”
}
updateClock();
setInterval(updateClock, 1000);