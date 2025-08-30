// working with local storage 

var span = document.querySelector("span");
var block = document.querySelector(".block");
var unblock = document.querySelector(".unblock");

function checkstatus() {
    if(localStorage.getItem("block") === "true") {
        span.textContent = "Blocked";
    } else {
        span.textContent = "Unblocked";
    }
}

block.addEventListener("click", function() {
    localStorage.setItem("block", "true"); // u can check the values stored in the local storage using console
    checkstatus();
})

unblock.addEventListener("click", function() {
    localStorage.setItem("block", "false");
    checkstatus();
})

checkstatus();