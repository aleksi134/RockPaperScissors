let computerScore = 0;
let playerScore = 0;
document.querySelectorAll("button");

function computerPlay() {
  let choice = Math.random() * 3;
  if (choice <= 1) {
    choice = "rock";
  } else if (choice <= 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection == "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scisssors")
  ) {
    computerScore = computerScore++;
    return "You lost the round!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore = playerScore++;
    return "You won a round!";
  }

  if (playerSelection === computerSelection) {
    return "Its a tie!";
  }
}
function declareWinner() {
  if (playerScore === 5) {
    return "Congratz you won the game!";
  } else {
    return "Computer won the game!";
  }
}

function chooseWinner() {
  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
}
function game() {
  while (playerScore < 5 || computerScore < 5) {
    playRound();
    console.log(playerScore, computerScore);
  }
  if (playerScore === 5 || computerScore === 5) {
    chooseWinner()
  }
}

let playerSelection = window.prompt("Rock,paper or scissors?").toLowerCase();
const computerSelection = computerPlay();
console.log(game(playerSelection, computerSelection));
