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
particlesJS.load('particles-js', 'particles.json', null);

$.ajax({
    url: "/config/skills",
})
.done(function(data) {
    
    let jsonData = JSON.parse(data);

    // iterate the result here and populate my skills from the skills.json file
    // we should add a target property with the element to be loaded
    jsonData.forEach(function(element) {

        if($(element.target).length == 0)
            return;
      
        var skillBar = new ProgressBar.Circle(element.target, {
            color: element.color,
            trailColor: element.trailColor,
            trailWidth: element.trailWidth,
            duration: element.duration,
            easing: element.easing,
            strokeWidth: element.strokeWidth,
            from: { color: element.from.color, a:0 },
            to: { color: element.to.color, a:1 },
            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
            }
        });

        skillBar.animate(element.animate);

    }, this);
   
});