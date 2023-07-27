let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let result;
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const scoreText = document.querySelector('#scoreText');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    playGame();
}));


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        resultText.textContent = "It was a draw! " + playerSelection + " is the same as " + computerSelection;
    } else if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection.toUpperCase() == "SCISSORS") {
            playerScore++;
            resultText.textContent = "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            computerScore++;
            resultText.textContent = "You lost! " + computerSelection + " beats " + playerSelection;
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection.toUpperCase() == "ROCK") {
            playerScore++;
            resultText.textContent = "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            computerScore++;
            resultText.textContent = "You lost! " + computerSelection + " beats " + playerSelection;
        }
    } else if (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection.toUpperCase() == "PAPER") {
            playerScore++;
            resultText.textContent = "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            computerScore++;
            resultText.textContent = "You lost! " + computerSelection + " beats " + playerSelection;
        }
    }
}

function playGame() {
    playRound(playerSelection, computerSelection);
    scoreText.textContent = `Current Score: Player: ${playerScore} Computer: ${computerScore}`
    if (playerScore === 5) {
        scoreText.textContent = "Congrats you won! Player " + playerScore + " : Computer " + computerScore;
        resetScore();
    } else if (computerScore === 5) {
       scoreText.textContent = "You lost! Try again. Player " + playerScore + " : Computer " + computerScore;
       resetScore();
    } else {
        scoreText.textContent = `Current Score: Player: ${playerScore} Computer: ${computerScore}`
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}