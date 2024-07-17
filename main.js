console.log("Hello player1");
let roundsNum = prompt("How many rounds would you like to play?");
playGame(roundsNum);





function capitalize(string){ // this function returns the string with the first letter Capitalized and the rest lower case.
    let capString = "";
    let firstChar = string[0];
    let restOfString = string.slice(1);
    capString = firstChar.toUpperCase() + restOfString.toLowerCase();
    return capString;
}


function getComputerChoice(){
    let randomNum = Math.random();
    let move = ""
    if(randomNum < 0.334){
        move = "Rock"
    }
    else if(randomNum < 0.667){
        move = "Paper";
    }
    else{
        move = "Scissors";
    }
    return move;

}

function getPlayerChoice(){
    let choice = capitalize(prompt("The computer made his choice!\n What's yours?"))
    return choice;
}

function calculateWinner(playerMove, computerMove){
    let result = "";
    if(playerMove === computerMove){
        result = "Draw!";
    }
    else if(playerMove === "Rock"){
        if(computerMove === "Paper"){
            result = "Computer has won this round";
        }
        else{
            result = "Player has won this round";
        }
    }
    else if(playerMove === "Paper"){
        if(computerMove === "Scissors"){
            result = "Computer has won this round";
        }
        else{
            result = "Player has won this round";
        }
    }
    else if(playerMove === "Scissors"){
        if(computerMove === "Rock"){
            result = "Computer has won this round";
        }
        else{
            result = "Player has won this round";
        }
    }
    else{
        result = "Player made illegal move";
    }
    return result;
}


function singleRound(){
    let computerMove = getComputerChoice();
    let playerMove = getPlayerChoice();
    let result = calculateWinner(playerMove, computerMove);
    console.log("The computer chose: " + computerMove);
    console.log(result);
    
    if(result === "Player has won this round"){
        return "Player";
    }
    else if(result === "Computer has won this round"){
        return "Computer";
    }
    else{
        return "Draw"; // draw might be after player input a move that isn't rock/paper/scissors
    }
}

function playGame(roundsNum){
    let humanScore = 0;
    let computerScore = 0;
    while(humanScore != roundsNum && computerScore != roundsNum){
        let result = singleRound();
        if(result === "Player"){
            ++humanScore;
        }
        else if(result === "Computer"){
            ++computerScore;
        }
    }
    if(humanScore > computerScore){
        console.log("Player has won the game!")
    }
    else{
        console.log("Computer has won the game!");
    }

}







