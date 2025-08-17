// create a card with a follow and remove and btn. when we click on the follow btn its changes to following. and when we click on the remove the following changes to follow again.

var followbtn = document.querySelector('#follow-btn')
var removebtn = document.querySelector('#remove-btn')

followbtn.addEventListener('click', function(){
    followbtn.innerHTML = 'following'
    followbtn.style.backgroundColor = 'green'
})

removebtn.addEventListener('click', function(){
    followbtn.style.backgroundColor = 'lemonchiffon'
    followbtn.innerHTML = 'follow'
})