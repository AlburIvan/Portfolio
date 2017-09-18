$(function() {

     // Typed.js Initialitation
     var typed = new Typed('.developer-name', {
        strings: [
            "Ivan A. Alburquerque",
        ],
        typeSpeed: 10,
        startDelay: 1050,
        showCursor: false,
        loop: false,
    });

    // Typed.js Initialitation
    var typed = new Typed('.developer-title', {
        strings: [
            "Android Developer",
            "Full Stack Engineer",
            "Kotlin Lover",
            "Bug Neurosurgeon",
        ],
        typeSpeed: 22,
        startDelay: 1550,
        backDelay: 850,
        showCursor: true,
        loop: true,
    });

    // ParticleJS Initialitation
    particlesJS.load('particles-js', 'particles.json', null);
   
    $('#ubea-services').on('inview', function(event, isInView) {
        if (isInView) {
            setTimeout(function() {
                $.ajax({
                    url: "/config/skills",
                })
                .done(function(data) {
                    
                    let jsonData = JSON.parse(data);
                
                    // Iterate the result here and populate my skills from the skills.json file
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
            }, 450);
        } else {
            $('#ubea-services').off('inview');
        }
    });
});
