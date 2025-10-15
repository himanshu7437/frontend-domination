const inputBox = document.getElementById("input-box")
const listContainer = document.querySelector(".list-container")

function AddTask() {
    if(inputBox.value === "") {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x"
        li.appendChild(span);
    }
    inputBox.value = "";
}