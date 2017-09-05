// Typed.js Initialitation
var typed = new Typed('.developer-name', {
    strings: [
        "Ivan A. Alburquerque",
        "Android Developer"
    ],
    typeSpeed: 35,
    startDelay: 1000,
    backDelay: 200,
    showCursor: true,
    cursorChar: '|',
    loop: false,
});

// ParticleJS Initialitation
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});