const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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
