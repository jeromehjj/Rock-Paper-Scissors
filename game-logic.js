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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const prompt=require("prompt-sync")({sigint:true});
        let playerSelection = prompt("Choose between Rock, Paper or Scissors: ");
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("won")) {
            playerScore++;
        } else if (result.includes("lost")) {
            computerScore++;
        } else {
            continue;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congrats you won! Player " + playerScore + " : Computer " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lost! Try again. Player " + playerScore + " : Computer " + computerScore);
    } else {
        console.log("You somehow drew! Try again. Player " + playerScore + " : Computer " + computerScore);
    }
}

game();