function computerPlay() {
    const rps = Math.floor(Math.random()*9)
    if (rps >= 0 && rps <= 2) {
        return 'ATTACK'
    }
    else if (rps >= 3 && rps <= 5) {
        return 'COUNTER'
    }
    else if (rps >= 6 && rps <= 8) {
        return 'MAGIC'
    }
}

function playRound () {
    if (playerSelection === computerSelection) {
        playResult = `You Tie!. ${playerSelection} and ${computerSelection} are equal.`
    }
    else if (playerSelection === 'ATTACK' && computerSelection === 'COUNTER') {
        playResult = `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'ATTACK' && computerSelection === 'MAGIC') {
        playResult = `You Win!. ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'MAGIC' && computerSelection === 'ATTACK') {
        playResult = `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'MAGIC' && computerSelection === 'COUNTER') {
        playResult = `You Win!. ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'COUNTER' && computerSelection === 'MAGIC') {
        playResult = `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'COUNTER' && computerSelection === 'ATTACK') {
        playResult = `You Win!. ${playerSelection} beats ${computerSelection}.`
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
}

const attack = document.querySelector('.attack');
const counter = document.querySelector('.counter');
const magic = document.querySelector('.magic');
let playerSelection;
let computerSelection;
let playerMove;
let enemyMove;