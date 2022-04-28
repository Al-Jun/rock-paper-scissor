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
        return "TIE"
    }
    else if (playerSelection === 'ATTACK!' && computerSelection === 'COUNTER!') {
        return "LOSE"
    }
    else if (playerSelection === 'ATTACK!' && computerSelection === 'MAGIC!') {
        return "WIN"
    }
    else if (playerSelection === 'MAGIC!' && computerSelection === 'ATTACK!') {
        return "LOSE"
    }
    else if (playerSelection === 'MAGIC!' && computerSelection === 'COUNTER!') {
        return "WIN"
    }
    else if (playerSelection === 'COUNTER!' && computerSelection === 'MAGIC!') {
        return "LOSE"
    }
    else if (playerSelection === 'COUNTER!' && computerSelection === 'ATTACK!') {
        return "WIN"
    }
}

function gameOn () {
    while (enemyScore >= 1 && playerScore >= 1) {
        alert('Please Choose your move!');
        if (chooseDeath) {
            enemyHP -= 5;
            playerHP -= 5;
        }
        else if (playRound () === "LOSE") {
            --enemyHP;
            console.log (`You Lose!. ${computerSelection} beats ${playerSelection}.`);
            console.log (`Your Score: ${playerScore}  Enemy Score: ${computerScore}`);
        }
        else if (playRound () === "WIN") {
            --playerHP;
            console.log (`You Win!. ${playerSelection} beats ${computerSelection}.`);
            console.log (`Your Score: ${playerScore}  Enemy Score: ${computerScore}`);
        }
        else {
            console.log (`You Tie!. ${playerSelection} and ${computerSelection} are equal.`)
        }
    }
}

const choice = document.querySelectorAll('.move');
const giveUp = document.querySelector('.give-up');
let playerSelection;
let computerSelection;
let playerHP = 5;
let enemyHP = 5;
let chooseDeath;

choice.forEach(item => {
    item.addEventListener('click', e => {
        playerSelection = e.target.innerText;
    })
})

