let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_P = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scisors_div = document.getElementById("s");

//function that will generate the random pick of the bot //
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// function that will convert the letters to it's respective object//

function convertToWord(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scisors"
}


// function that will display the win result on the html page //
function win (userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "com".fontsize(3).sub();
    result_P.innerHTML = convertToWord(userChoice) + smallUserWord + "   beats   " + convertToWord(computerChoice) + smallComputerWord  +  "   you won !!   " ;
}

function lose (userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "com".fontsize(3).sub();
    result_P.innerHTML = convertToWord(userChoice) + smallUserWord + "   loses to   " + convertToWord(computerChoice) + smallComputerWord  +  "   you lose !!   ";
}

function draw (userChoice, computerChoice){
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "com".fontsize(3).sub();
    result_P.innerHTML = convertToWord(userChoice) + smallUserWord + "  is equal to   " + convertToWord(computerChoice) + smallComputerWord  +  "   it's a draw !!   ";

    
}



//function that will check the outcome of the game // 

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); 
            break;

    }
}

// function that runs the game // 

function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    
    })
    
    paper_div.addEventListener('click', function(){
        game("p")
    })
    
    scisors_div.addEventListener('click', function(){
        game("s")
    })
}

main();



