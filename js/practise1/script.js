// problem statement 
// make a rectangle and when we move mouse on that reactangle on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right we want to change the color to blue 

var rectangle = document.querySelector('.rect');
var maindiv = document.querySelector('.main');

rectangle.addEventListener('mousemove', function(dets) {
    const rectangularloc = rectangle.getBoundingClientRect();
    var insiderectval = dets.clientX - rectangularloc.left;

    if( insiderectval < rectangularloc.width/2){
        //left
       var redColor = gsap.utils.mapRange(0, rectangularloc.width/2, 255, 0, insiderectval);

       gsap.to('.rect', {
        backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease: Power4,
       });
    } else {
        //right
        var blueColor = gsap.utils.mapRange(rectangularloc.width/2, rectangularloc.width, 0, 255, insiderectval);

       gsap.to('.rect', {
        backgroundColor: `rgb(0, 0, ${blueColor})`,
        ease: Power4,
       });

    }
})

rectangle.addEventListener('mouseleave', function() {
    gsap.to('.rect', {
        backgroundColor: 'white',
        ease: Power4,
       });
})

