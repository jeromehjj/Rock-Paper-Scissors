function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It was a draw! " + playerSelection + " is the same as " + computerSelection;
    } else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lost! " + computerSelection + " beats " + playerSelection;
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lost! " + computerSelection + " beats " + playerSelection;
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lost! " + computerSelection + " beats " + playerSelection;
        }
    } else {
        return "Invalid input! choose either Rock, Paper or Scissors"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));