const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = function () {
    let humanChoice = prompt("Rock, paper or scissors?");

    return humanChoice;
}

const playRound = function (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    else if (humanChoice === PAPER) {
        switch (computerChoice) {
            case ROCK:
                console.log("You win! Paper beats rock");
                humanScore++;
                break;
            case SCISSORS:
                console.log("You lose! Scissors beat paper");
                computerScore++;
                break;
        }
    }
    else if (humanChoice === ROCK) {
        switch (computerChoice) {
            case PAPER:
                console.log("You lose! Paper beats rock");
                computerScore++;
                break;
            case SCISSORS:
                console.log("You win! Rock beats scissors");
                humanScore++;

                break;
        }
    }
    else if (humanChoice === SCISSORS) {
        switch (computerChoice) {
            case PAPER:
                console.log("You win! Scissors beat paper");
                humanScore++;
                break;
            case ROCK:
                console.log("You lose! Rock beats scissors");
                computerScore++;
                break;
        }
    }
}

const playGame = function () {
    let humanSelection = getHumanChoice();
    console.log(humanSelection);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(humanSelection, computerSelection);

    for (let i = 1; i < ROUNDS; i++) {
        humanSelection = getHumanChoice();
        console.log(humanSelection);

        computerSelection = getComputerChoice()
        console.log(computerSelection);
;
        playRound(humanSelection, computerSelection);
    }
}

playGame();




