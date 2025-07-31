let choices = document.querySelectorAll(".choice");
let userel = document.querySelector("#user-score");
let computerel = document.querySelector("#comp-score");
let message = document.querySelector("#msg");

let userScore = 0;
let computerScore = 0;

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });

});

function playGame(userChoice){
    // generate computer choice
    let comChoice = computerChoice();
    if(userChoice === comChoice){
        message.innerText = "Draw game!! Play Again.";
        message.style.backgroundColor = "#081b31";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // computer have scissor/paper
            userWin = (comChoice === "paper") ? false : true;
        }else  if(userChoice === "paper"){
            // computer have scissor/rock
            userWin = (comChoice === "scissor") ? false : true;
        }else{
             // computer have rock/paper
            userWin = (comChoice === "rock") ? false : true;
        }
        showWinner(userWin);
    }
}

let computerChoice = () =>{ 
    let option = ["rock","paper","scissor"]
    let idx = Math.floor(Math.random()*3);
    return option[idx];

}
function showWinner(userWin){
    if(userWin){
        message.innerText = "You Win";
        message.style.backgroundColor = "Green";
        userScore++;
        userel.innerText = userScore;
    }else{
        message.innerText = "You Lose";
        message.style.backgroundColor = "Red";
        computerScore++;
        computerel.innerText = computerScore;
    }
}