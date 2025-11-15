const playersInput = document.querySelector(".players");
const player1Input = document.querySelector("#player-1");
const player2Input = document.querySelector("#player-2");
const submitBtn = document.querySelector("#submit");
const restart = document.querySelector("#restart");
const gamingArea = document.querySelector(".gaming-area");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = ""
let currentSymbol = "X";
let gameActive = true;

// when player submits
submitBtn.addEventListener("click", () => {
  player1 = player1Input.value.trim();
  player2 = player2Input.value.trim();

  if(player1 === "" || player2 === "") {
    alert("Enter both players name");
    return
  }

   playersInput.style.display = "none";
   gamingArea.style.display = "flex";

   currentPlayer = player1;
   message.textContent = `${currentPlayer}, you're up!`
})

// Handle cell clicks
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if(!gameActive || cell.textContent !== "") return;
        cell.textContent = currentSymbol;

        if(isWin()) {
            message.textContent = `${currentPlayer}, congrats you won!`
            gameActive = false
            restart.style.display = "block";
            return
        }

        if(isDraw()) {
            message.textContent = "It's a draw!"
            gameActive = false
            return
        }

        //switch player 
        if(currentPlayer === player1) {
            currentPlayer = player2;
            currentSymbol = "O"
        } else {
            currentPlayer = player1;
            currentSymbol = "X"
        }

        message.textContent = `${currentPlayer}, you're up!`
    })
})

//check Win
function isWin() {
    const winningCombinations = [
        [1,2,3], [4,5,6],[7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9],[3,5,7]
    ]

    return winningCombinations.some(combo => {
        const [a, b, c] = combo.map(id => document.getElementById(id).textContent);
        return a!=="" && a === b && b === c
    })
}

//check draw
function isDraw() {
    return [...cells].every(cell => cell.textContent !=="")
}

//restart function
const restartGame = () => {
    window.location.reload();
}

//restart button
restart.addEventListener("click", restartGame);