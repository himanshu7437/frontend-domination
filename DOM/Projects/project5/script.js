// questions
// create a html page with a btn. when the btn is clicked change the text of the paragraph element.

var btn = document.querySelector('button');
var p = document.querySelector('p');

btn.addEventListener('click', function() {
    p.textContent = "Clicked"; // tesxt content is access drectly.
})