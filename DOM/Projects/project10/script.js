// question
// crerate a tabbed surface, on selecting different tab different paragraph show

var tabs = document.querySelectorAll('.tab');
var text = document.querySelectorAll('.text');


function hideAll() {
    text.forEach(function(elem) {
        elem.style.display = "none"        
    })
}
hideAll();

text[0].style.display = "block";

tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
    hideAll();
    
    var targetClass = tab.classList[1];
        
    var targetText = document.querySelector('.text.' + targetClass)
    targetText.style.display = "block"
    })
})
