function computerPlay() {
    const rps = Math.floor(Math.random()*9)
    if (rps >= 0 && rps <= 2) {
        return 'Rock'
    }
    else if (rps >= 3 && rps <= 5) {
        return 'Paper'
    }
    else if (rps >= 6 && rps <= 8) {
        return 'Scissor'
    }
}

function convertInput (input) {
    return input.toLowerCase()
}

function checkInput () {
    if (convertInput(userInput) === 'rock') {
        return 'Rock'
    }
    else if (convertInput(userInput) === 'paper') {
        return 'Paper'
    }
    else if (convertInput(userInput) === 'scissor') {
        return 'Scissor'
    }
    else {
        if (userInput === null) {
            return;
        }
        
        else userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ');
        checkInput ();
    }
}

function playRound () {
    playerSelection = checkInput()
    computerSelection = computerPlay()
    if (playerSelection === undefined) {
        return;
    }
    else if (playerSelection === computerSelection) {
        return `You Tie!. ${playerSelection} and ${computerSelection} are equal.`
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
        return `You Win!. ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Rock') {
        return `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return `You Win!. ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        return `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You Win!. ${playerSelection} beats ${computerSelection}.`
    }
}

function gameOn () {
    while (computerScore < 5 && playerScore < 5) {
        userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ', 'rock');
        if (userInput === null) {
            computerScore += 5;
            playerScore += 5;
        }
        else if (playRound () === `You Lose!. ${computerSelection} beats ${playerSelection}.`) {
            ++computerScore;
            console.log (`You Lose!. ${computerSelection} beats ${playerSelection}.`);
            console.log (`Your Score: ${playerScore}  Enemy Score: ${computerScore}`);
        }
        else if (playRound () === `You Win!. ${playerSelection} beats ${computerSelection}.`) {
            ++playerScore;
            console.log (`You Win!. ${playerSelection} beats ${computerSelection}.`);
            console.log (`Your Score: ${playerScore}  Enemy Score: ${computerScore}`);
        }
        else {
            console.log (`You Tie!. ${playerSelection} and ${computerSelection} are equal.`)
        }
    }
    console.log('Game Over!')
    gameFinish();
}

function checkInputYesNo () {
    if (playAgain == null) {
        return;
    }
    else if (convertInput(playAgain) === 'yes') {
        return 'Yes'
    }
    else if (convertInput(playAgain) === 'no') {
        return 'No'
    }
    else if (playAgain == true) {
        playAgain = prompt('Please Check your answer, yes or no?');
        checkInputYesNo ();
    }
}

function gameFinish () {
    if (computerScore >= 5) {
        playAgain = prompt('Unfortunately, You lose! Wanna try again?');
        if (playAgain === null || checkInputYesNo() === 'No') {
            console.log('Goodbye!');
        }
        else if (checkInputYesNo() === 'Yes' || playAgain === "") {
            computerScore = 0;
            playerScore = 0;
            gameOn();
        }
    }
    else {
        playAgain = prompt('Congratulation, You Win! Wanna play again?');
        if (playAgain === null || checkInputYesNo === 'No') {
            console.log('Goodbye!');
        }
        else if (checkInputYesNo() === 'Yes'|| playAgain === "") {
            computerScore = 0;
            playerScore = 0;
            gameOn();
        }
    }
}

let userInput;
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let playAgain;

gameOn();