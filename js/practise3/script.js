// Question
// image popout effect

const rect = document.querySelector('.rect');

function throttle(fn, delay) {
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}

rect.addEventListener('mousemove', throttle(() => {
    console.log('Resize event triggered!');
}, 500));