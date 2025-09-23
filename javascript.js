const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function(){
    const choice = Math.random();

    if (choice < 0.33){
        return ROCK;
    }
    else if (choice < 0.66){
        return PAPER
    }
    else{
        return SCISSORS;
    }  
}

const getHumanChoice = function(){
    userChoice = prompt();

    return userChoice;
}
