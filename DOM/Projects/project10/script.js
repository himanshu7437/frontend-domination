// question
// crerate a tabbed surface, on selecting different tab different paragraph show

var p = document.querySelector('p');
var first = document.querySelector('.first')
var second = document.querySelector('.second')
var third = document.querySelector('.third')
var fourth = document.querySelector('.fourth')
var fifth = document.querySelector('.fifth')

first.addEventListener('click', function() {
    p.textContent = 'this is first tab'
})
second.addEventListener('click', function() {
    p.textContent = 'this is second tab'
})
third.addEventListener('click', function() {
    p.textContent = 'this is third tab'
})
fourth.addEventListener('click', function() {
    p.textContent = 'this is fourth tab'
})
fifth.addEventListener('click', function() {
    p.textContent = 'this is fifth tab'
    
})
