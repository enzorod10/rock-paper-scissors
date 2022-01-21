// create function which will return rock, paper or scissors for computer
// create function that playus single round of rps
// this function should take 2 parameters: playerSelection & computerSelection
// have this function return a string, declaring winner of the round

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

let container = document.querySelector('.container');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let play = document.querySelector('.play');


const message = document.querySelector('.message');
let content = document.createElement('div');
let content2 = document.createElement('div');

play.textContent = "Play";
play.addEventListener('click', function(ev){
    play.textContent = "";
    play.classList.toggle('play');

    let playerScore = 0;
    let computerScore = 0;

    container.addEventListener('click', function(ev){
        //Player picks
        if (ev.target.classList == "option1"){
            playerSelection = 'rock';
        }else if (ev.target.classList == "option2"){
            playerSelection = 'paper';    
        }else if (ev.target.classList == "option3"){
            playerSelection = 'scissors';
        }else return;
    
        //Computer picks
        computerSelection = computerPlay();
        //Logic behind winner

        if (playerSelection == computerSelection){
        }else if (playerSelection == "rock" & computerSelection == "paper"){
            computerScore++;
        }else if (playerSelection == "paper" & computerSelection == "scissors"){
            computerScore++;
        }else if (playerSelection == "scissors" & computerSelection == "rock"){
            computerScore++;
        }
        else{
            playerScore++;
        }

        content2.textContent = "Player Score: " + playerScore;
        message.appendChild(content2);
        content.textContent = "Computer Score: " + computerScore;
        message.appendChild(content);
    
        if (playerScore == 5){
            content.classList.toggle('computerWins');
            content.textContent = 'Player Wins!';
            message.appendChild(content);
        }
        if (computerScore == 5){
            content.classList.toggle('computerWins');
            content.textContent = 'Computer Wins!';
            message.appendChild(content);
        }
    });
});