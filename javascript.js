const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const MAX_SCORE = 3;

let humanScore = 0;
let computerScore = 0;

const headline = document.getElementById("headline");
headline.textContent = "First to score " + MAX_SCORE + " points wins!";

const resultsDiv = document.getElementById("results");
resultsDiv.textContent = "Choose an option!";

const humanScoreDiv = document.getElementById("human-score");
humanScoreDiv.textContent = "Player Score: " + humanScore;

const computerScoreDiv = document.getElementById("computer-score");
computerScoreDiv.textContent = "Computer Score: " + computerScore;

const playAgainContainer = document.getElementById("play-again-container");
playAgainContainer.textContent = "";




const getComputerChoice = function () {
    const choice = Math.random();

    if (choice < 0.33) {
        return ROCK;
    }
    else if (choice < 0.66) {
        return PAPER
    }
    else {
        return SCISSORS;
    }
}

const playRound = function (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie!";
    }
    else if (humanChoice === PAPER) {
        switch (computerChoice) {
            case ROCK:
                resultsDiv.textContent = "You win! Paper beats rock";
                humanScore++;
                break;
            case SCISSORS:
                resultsDiv.textContent = "You lose! Scissors beat paper";
                computerScore++;
                break;
        }
    }
    else if (humanChoice === ROCK) {
        switch (computerChoice) {
            case PAPER:
                resultsDiv.textContent = "You lose! Paper beats rock";
                computerScore++;
                break;
            case SCISSORS:
                resultsDiv.textContent = "You win! Rock beats scissors";
                humanScore++;
                break;
        }
    }
    else if (humanChoice === SCISSORS) {
        switch (computerChoice) {
            case PAPER:
                resultsDiv.textContent = "You win! Scissors beat paper";
                humanScore++;
                break;
            case ROCK:
                resultsDiv.textContent = "You lose! Rock beats scissors";
                computerScore++;
                break;
        }
    }

    humanScoreDiv.textContent = "Player Score: " + humanScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;

    if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
        // Disable buttons after game ends
        endGame();
    }
}

const endGame = function () {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    if (humanScore > computerScore) {
        resultsDiv.textContent = "You win!"
    }
    else {
        resultsDiv.textContent = "You lose!"
    }

    // Create Play Again button
    let playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.addEventListener("click", resetGame);

    // Add it to container
    playAgainContainer.textContent = "";
    playAgainContainer.appendChild(playAgainBtn);
}


const resetGame = function () {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.textContent = "Choose an option!";
    playAgainContainer.textContent = ""; // remove play again button

    // Enable buttons again
    document.querySelectorAll("button").forEach(btn => btn.disabled = false);
}



document.getElementById("rock-button").addEventListener("click", () => playRound(ROCK, getComputerChoice()));
document.getElementById("paper-button").addEventListener("click", () => playRound(PAPER, getComputerChoice()));
document.getElementById("scissors-button").addEventListener("click", () => playRound(SCISSORS, getComputerChoice()));



