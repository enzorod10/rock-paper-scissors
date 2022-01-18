// create function which will return rock, paper or scissors for computer
// create function that playus single round of rps
// this function should take 2 parameters: playerSelection & computerSelection
// have this function return a string, declaring winner of rthe round

function computerPlay(){
    let pcHand = Math.floor(Math.random() * 3);
    if (pcHand == 0){
        return "rock";
    }if (pcHand == 1){
        return "paper";
    }if (pcHand == 2){
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie!";
    }else if (playerSelection == "rock" & computerSelection == "paper"){
        return "Computer wins!";
    }else if (playerSelection == "paper" & computerSelection == "scissors"){
        return "Computer wins!";
    }else if (playerSelection == "scissors" & computerSelection == "rock"){
        return "Computer wins!";
    }else return "Player wins!";
}
for (let i = 0; i < 5; i++){
    let userOriginalPick = (window.prompt("Please pick a sign: "));
    let computerSelection = computerPlay();
    let playerSelection = userOriginalPick.toLowerCase();

    console.log(singleRound(playerSelection, computerSelection));
    console.log(playerSelection);
    console.log(computerSelection);
}

