// question
// create a form with input fields and submit a button. use a js to validate the form and display an error message if the input is valid.

// note- onsubmit by default page reload due to which our js will not work so we have to prevent this using prevent default event. Also the submit event is on form tag.

var form = document.querySelector('form')
var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var h3 = document.querySelector('h3')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(inp1.value === '' || inp2.value === '') {
        h3.innerHTML = 'error, fields are blank';
        h3.style.color = 'red';

    } else {
        h3.innerHTML = 'form submitted';
        h3.style.color = 'black';
    }

})