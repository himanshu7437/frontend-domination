//question
// create a countdown timer which start with a btn.

var start = document.querySelector('.start');
var h3 = document.querySelector('h3');
var count = 0;
var inter1;
var run = 1;

start.addEventListener('click', function() {
    if(run == 1) {
        inter1 = setInterval(() => {
        h3.textContent = count;
        count++;
    }, 1000);
    start.textContent = 'stop'
    run = 0;
    } else {
        clearInterval(inter1);
        start.textContent = 'start'
        run = 1;
    }
})
