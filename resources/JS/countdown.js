// countdown.js

// VASTE lanceringsdatum en -tijd (pas hier aan naar wens)
const launchDate = new Date("2025-05-18T12:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    const countdownEl = document.getElementById("countdown");

    if (!countdownEl) return;

    if (diff <= 0) {
        countdownEl.innerHTML = "We are live!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit' 
    };
    const launchDateString = launchDate.toLocaleDateString('en-EN', options);

    countdownEl.innerHTML =
        `Website live on: ${launchDateString}<br>
        Another ${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
