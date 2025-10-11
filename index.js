function getComputerChoice() {
  let randomInput = (Math.floor(Math.random() * 3) + 1);
  if (randomInput == 1) {
    return "rock";
  } else if (randomInput == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let playerInput = prompt(`Submit only: rock, paper, scissors.`);
  return playerInput.toLowerCase();
}


function playGame() {  
  let humanScore = 0;
  let computerScore = 0;
  let result = "";

  function playRound(humanChoice, computerChoice) {
    //console.log(`You: ${humanChoice}, Computer: ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      result = "won";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      result = "won";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      result = "won";
    } else if (humanChoice === computerChoice) {
      result = "tied";
    } else {
      computerScore++; 
      result = "lost";
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(`You:       ${humanSelection}`);
  console.log(`Computer:  ${computerSelection}`);
  console.log(`Round ${result}.\nYour score: ${humanScore} | Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(`You:       ${humanSelection}`);
  console.log(`Computer:  ${computerSelection}`);
  console.log(`Round ${result}.\nYour score: ${humanScore} | Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(`You:       ${humanSelection}`);
  console.log(`Computer:  ${computerSelection}`);
  console.log(`Round ${result}.\nYour score: ${humanScore} | Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(`You:       ${humanSelection}`);
  console.log(`Computer:  ${computerSelection}`);
  console.log(`Round ${result}.\nYour score: ${humanScore} | Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(`You:       ${humanSelection}`);
  console.log(`Computer:  ${computerSelection}`);
  console.log(`Round ${result}.\nYour score: ${humanScore} | Computer score: ${computerScore}`);

  if (humanScore > computerScore) {
    result = "\nYou won the game.";
    console.log(`${result}`);
  } else if (computerScore == humanScore) {
    result = "\nGame tied.";
  } else {
    result = "\nComputer won the game."; 
    console.log(`${result}`);
  }
}

playGame();
