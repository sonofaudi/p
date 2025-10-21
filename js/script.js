const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const liveTime = document.getElementById('liveTime');

function updateClock(){
  const now = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format();
  liveTime.textContent = now;
}
updateClock();                 
setInterval(updateClock, 1000); 