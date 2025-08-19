//question
// create a ordered list. add and remove item dynamiccalyy.

var add = document.querySelector('.add');
var remove = document.querySelector('.remove');
var inp = document.querySelector('input');
var ol = document.querySelector('ol');

var li;

add.addEventListener('click', function() {
    li = document.createElement('li');
    if(inp.value.trim() === ""){}
    else {
        li.textContent = inp.value;
        ol.appendChild(li);
        inp.value = ''
    }
})

remove.addEventListener('click', function() {
    li.remove();
})