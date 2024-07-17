console.log("Hello player1");
let roundsNum = prompt("How many rounds would you like to play?");
playGame(roundsNum);



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
            return "Computer have won this round";
        }
        else{
            return "Player has won this round";
        }
    }
    else if(playerMove === "Paper"){
        if(computerMove === "Scissors"){
            return "Computer have won this round";
        }
        else{
            return "Player has won this round";
        }
    }
    else if(playerMove === "Scissors"){
        if(computerMove === "Rock"){
            return "Computer have won this round";
        }
        else{
            return "Player has won this round";
        }
    }
    else{
        return "Player made illegal move";
    }
}


function singleRound(){
    const computerMove = getComputerChoice();
    const playerMove = getPlayerChoice();
    const result = calculateWinner(playerMove, computerMove);
    console.log("The computer chose: " + computerMove);
    console.log(result);
    
    if(result === "Player has won this round"){
        return "Player";
    }
    else if(result === "Computer have won this round"){
        return "Computer";
    }
    else{
        return "Draw"; // draw might be after player input a move that isn't rock/paper/scissors
    }
}

function playGame(roundsNum){
    let playerScore = 0;
    let computerScore = 0;
    let result;
    while(playerScore != roundsNum && computerScore != roundsNum){
        result = singleRound();
        if(result === "Player"){
            ++playerScore;
        }
        else if(result === "Computer"){
            ++computerScore;
        }
        console.log("The score is- Computer:" + computerScore + " Player:" + playerScore)
    }
    if(playerScore > computerScore){
        console.log("Player has won the game!")
    }
    else{
        console.log("Computer have won the game!");
    }

}







