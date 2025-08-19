//questions 
// create a circle and a btn. when clicked on the btn the color of the circle change to yellow and when again click on the btn the color change to transparent again


var bulb = document.querySelector(".circle")
var btn1 = document.querySelector(".btn1")
var invert = 1;

btn1.addEventListener("click", function(){
   if(invert == 1) {
    bulb.style.backgroundColor = 'yellow';
    btn1.innerHTML = 'OFF'
    invert = 0;
   } else {
    bulb.style.backgroundColor = 'white';
    btn1.innerHTML = 'ON'
    invert = 1;
   }
}
)

