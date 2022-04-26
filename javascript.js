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

function playRound () {
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
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
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');