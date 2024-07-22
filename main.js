const scoreBoard = document.querySelector(".scoreBoard");
const moves = document.querySelector(".moves");
console.log("moves");

let computerScore = 0;
let playerScore = 0;

const moveBoardPlayer = document.querySelector("#playerMove");
const moveBoardComputer = document.querySelector("#computerMove");
const scoreBoardPlayer = document.querySelector("#playerScore");
const scoreBoardComputer = document.querySelector("#computerScore");
const roundResult = document.querySelector("#roundResult")
updateScore();


moves.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    singleRound(event.target.id);
});


console.log("Hello player1");
let roundsNum = prompt("How many rounds would you like to play?");

//playGame(roundsNum);


function updateScore(){
    scoreBoardPlayer.textContent = "Player1 score - " + playerScore;
    scoreBoardComputer.textContent = "Computer score - " + computerScore;
}




function capitalize(string){ // this function returns the string with the first letter Capitalized and the rest lower case.
    let capString = "";
    const firstChar = string[0];
    const restOfString = string.slice(1);
    capString = firstChar.toUpperCase() + restOfString.toLowerCase();
    return capString;
}


function getComputerChoice(){
    const randomNum = Math.random();
    if(randomNum < 0.334){
        return "Rock"
    }
    else if(randomNum < 0.667){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}

function getPlayerChoice(){
    const choice = capitalize(prompt("The computer have made his choice!\n What's yours?"))
    return choice;
}

function calculateWinner(playerMove, computerMove){
    if(playerMove === computerMove){
        return "Draw!";
    }
    //we know for sure it's not a draw so we only need to check if it's a win for the computer
    else if(playerMove === "Rock"){
        if(computerMove === "Paper"){
            return "Paper wraps rock, Computer have won this round";
        }
        else{
            return "Rock breaks scissors, Player has won this round";
        }
    }
    else if(playerMove === "Paper"){
        if(computerMove === "Scissors"){
            return "Scissors cut paper, computer have won this round";
        }
        else{
            return "Paper wraps rock, Player has won this round";
        }
    }
    else if(playerMove === "Scissors"){
        if(computerMove === "Rock"){
            return "Rock breaks scissors, Computer have won this round";
        }
        else{
            return "Scissors cut paper, Player has won this round";
        }
    }
    else{
        return "Player made illegal move";
    }
}


function singleRound(btnID){
    
    const computerMove = getComputerChoice();
    const playerMove = capitalize(btnID.replace("Btn", ""));
    let result = calculateWinner(playerMove, computerMove);
    moveBoardPlayer.textContent = "Player move - " + playerMove;
    moveBoardComputer.textContent = "Computer move - " + computerMove;
    roundResult.textContent = "Round result - " + result;
    result = result.substring(result.indexOf(",") + 2);
    
    if(result === "Player has won this round"){
        ++playerScore;
    }
    else if(result === "Computer have won this round"){
        ++computerScore;
    }

    if(playerScore == roundsNum){
        alert("Player has won the game!");
        playerScore = 0;
        computerScore = 0;

    }
    else if(computerScore == roundsNum){
        alert("Computer have won the game!");
        playerScore = 0;
        computerScore = 0;
    }
    updateScore();
    
}










