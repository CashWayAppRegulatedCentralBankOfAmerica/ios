function launchApp(appName) {
  alert(`Launching ${appName}...`);
  // Replace with: window.location.href = 'yourapp.html';
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
