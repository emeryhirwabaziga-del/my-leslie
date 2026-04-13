// Surprise Button Functions
function showSurprise() {
    const surpriseBox = document.getElementById('surpriseBox');
    surpriseBox.classList.remove('hidden');
    
    // Add some confetti effect
    createConfetti();
}

function closeSurprise() {
    const surpriseBox = document.getElementById('surpriseBox');
    surpriseBox.classList.add('hidden');
}

// Close surprise when clicking outside the content
document.addEventListener('click', function(event) {
    const surpriseBox = document.getElementById('surpriseBox');
    const surpriseContent = document.querySelector('.surprise-content');
    if (event.target === surpriseBox && !surpriseContent.contains(event.target)) {
        closeSurprise();
    }
});

// Countdown Timer
function updateCountdown() {
    // Set the date you started dating (April 13, 2025)
    const startDate = new Date('2025-04-13T00:00:00').getTime();
    const now = new Date().getTime();
    
    // Calculate the difference
    const totalSeconds = Math.floor((now - startDate) / 1000);
    
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    
    // Update the display
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000);

// Simple Confetti Effect
function createConfetti() {
    const confettiPieces = 50;
    const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FF4500', '#FFD700', '#FF6347'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        const duration = 2000 + Math.random() * 1000;
        const xMove = (Math.random() - 0.5) * 300;
        
        let startTime = Date.now();
        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;
            
            confetti.style.top = (progress * window.innerHeight) + 'px';
            confetti.style.left = (parseFloat(confetti.style.left) + xMove * 0.01) + 'px';
            confetti.style.opacity = 1 - progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        }
        animate();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Page load animation
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});
