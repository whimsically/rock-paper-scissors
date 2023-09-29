// Gets a random number between 1 and 3, representing rock, paper, or scissors
function randomRPS() {
    const num = Math.floor(Math.random() * 3 + 1);
    return num;
}

//sets the variable for the computer's move
var compMove = randomRPS();

var compWin = 0;
var userWin = 0;
var draws = 0;

//function for the game
function rockPaperScissors () {
    //Prompts the user for their choice
    let userMove = prompt("Choose Rock, Paper, or Scissors!");

    //switch case depending on the user's input. converts to lowercase to handle any sort of capitalization
    switch (userMove.toLowerCase()) {
        case "rock":
            if (compMove === 3) {
                alert("The computer chose Scissors. You win!");
                userWin++;
            } else if (compMove === 2) {
                alert("The computer chose Paper. You lose!")
                compWin++;
            } else {
                alert("The computer chose Rock. It's a draw!")
                draws++;
            }
        break;
    
        case "paper":
        if (compMove === 3) {
            alert("The computer chose Scissors. You lose!");
            compWin++;
        } else if (compMove === 2) {
            alert("The computer chose Paper. It's a draw!")
            draws++;
        } else {
            alert("The computer chose Rock. You win!")
            userWin++;
        }
        break;
    
        case "scissors":
        if (compMove === 3) {
            alert("The computer chose Scissors. It's a draw!");
            draws++;
        } else if (compMove === 2) {
            alert("The computer chose Paper. You win!")
            userWin++;
        } else {
            alert("The computer chose Rock. You lose!")
            compWin++;
        }
        break;
    
        default:
        alert("Please enter a valid move!");
        break;
    }
    //Asks the user if they would like to play again. If so, runs function from the top.
    if (window.confirm("The current score is:\nUser wins: " + userWin + "\nComputer Wins: " + compWin +"\nDraws: " + draws + "\nWould you like to play again?")) {
        rockPaperScissors();
    }
}

//Initial call of game function
rockPaperScissors();