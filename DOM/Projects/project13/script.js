// build a character counter for a textarea or input field, which updates in real ime user types and enforces a character limit.

var inputt = document.querySelector("textarea")
var counter = document.querySelector("span")
var limit = 500;

inputt.addEventListener("input", function() {
    var totalLength = inputt.value.length;
    counter.textContent = `${totalLength}/500`;

    if (totalLength > limit) {
        inputt.value = inputt.value.substring(0, limit)
        inputt.textContent = `${limit}/${limit}`
    }
})