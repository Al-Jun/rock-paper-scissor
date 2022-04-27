function computerPlay() {
    const rps = Math.floor(Math.random()*9)
    if (rps >= 0 && rps <= 2) {
        computerSelection = 'ATTACK!';
    }
    else if (rps >= 3 && rps <= 5) {
        computerSelection = 'COUNTER!';
    }
    else if (rps >= 6 && rps <= 8) {
        computerSelection = 'MAGIC!';
    }
}

function playRound () {
    computerPlay();
    if (playerSelection === computerSelection) {
        playerMove = 0;
        enemyMove = 0;
    }
    else if (playerSelection === 'ATTACK!' && computerSelection === 'COUNTER!') {
        playerMove = 1;
        enemyMove = 2;
    }
    else if (playerSelection === 'ATTACK!' && computerSelection === 'MAGIC!') {
        playerMove = 1;
        enemyMove = 3;
    }
    else if (playerSelection === 'MAGIC!' && computerSelection === 'ATTACK!') {
        playerMove = 3;
        enemyMove = 1;
    }
    else if (playerSelection === 'MAGIC!' && computerSelection === 'COUNTER!') {
        playerMove = 3;
        enemyMove = 2;
    }
    else if (playerSelection === 'COUNTER!' && computerSelection === 'MAGIC!') {
        playerMove = 2;
        enemyMove = 3;
    }
    else if (playerSelection === 'COUNTER!' && computerSelection === 'ATTACK!') {
        playerMove = 2;
        enemyMove = 1;
    }
}

function gameOn () {
    while (enemyScore < 5 && playerScore < 5) {
        userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ', 'rock');
        if (userInput === null) {
            enemyScore += 5;
            playerScore += 5;
        }
        else if (playRound () === `You Lose!. ${computerSelection} beats ${playerSelection}.`) {
            ++enemyScore;
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

const choice = document.querySelectorAll('.move');
let playerSelection;
let computerSelection;
let playerMove;
let enemyMove;
let playerScore = 0;

choice.forEach(item => {
    item.addEventListener('click', e => {
        playerSelection = e.target.innerText;
    })
})

