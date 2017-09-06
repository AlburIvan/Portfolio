// Typed.js Initialitation
var typed = new Typed('.developer-name', {
    strings: [
        "Ivan A. Alburquerque",
        "Ivan A. Alburquerque</br>Android Developer"
    ],
    typeSpeed: 25,
    startDelay: 1000,
    backDelay: 200,
    showCursor: false,
    loop: false,
});

// ParticleJS Initialitation
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

var pieData = [
    {
       value: 25,
       label: 'Android',
       color: '#811BD6'
    },
    {
       value: 10,
       label: 'Java',
       color: '#9CBABA'
    },
    {
       value: 30,
       label: 'PHP',
       color: '#D18177'
    },
    {
       value : 35,
       label: 'HTML',
       color: '#6AE128'
    }
 ];

 var ctx = document.getElementById("skills").getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'doughnut',
     data: data = {
        datasets: [{
            data: [80, 20],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Android',
        ]
    }
 });