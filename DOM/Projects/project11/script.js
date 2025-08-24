// question 11
// display a progress bar that updates in real time, showcasing the progress of a task or form submission

var bar = document.querySelector(".bar");
var num = 0;
var interval = setInterval(() => {
    if(num >100){
        clearInterval(interval);
        document.querySelector('.complete').textContent = "download completed"
    }
    else {
        num += 1;
        bar.style.width = num + "%"
    }
}, 80);