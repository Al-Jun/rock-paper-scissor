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

function displayScore () {
    playerHPMessage.textContent = `Your HP: ${playerHP}`;
    enemyHPMessage.textContent = `Enemy HP: ${enemyHP}`;
}

function checkScore () {
    if ((enemyHP === 0 || playerHP === 0) && enemyHP > playerHP) alert('You Lose!');
    else if ((enemyHP === 0 || playerHP === 0) && enemyHP < playerHP) alert ('You Win!')
}

function gameOn () {
    if (chooseDeath) {
        alert("game Over!")
    }
    else {
        if (playRound () === "LOSE") {
            --playerHP;
            console.log (`You Lose!. ${computerSelection} beats ${playerSelection}.`);
            displayScore();
            checkScore();
        }
        else if (playRound () === "WIN") {
            --enemyHP;
            console.log (`You Win!. ${playerSelection} beats ${computerSelection}.`);
            displayScore();
            checkScore();
        }
        else {
            console.log (`You Tie!. ${playerSelection} and ${computerSelection} are equal.`)
        }
    }
}

const choice = document.querySelectorAll('.move');
const giveUp = document.querySelector('.give-up');
const playerHPMessage = document.querySelector('.player-hp');
const enemyHPMessage = document.querySelector('.enemy-hp');
let playerSelection;
let computerSelection;
let playerHP = 5;
let enemyHP = 5;
let chooseDeath;

choice.forEach(item => {
    item.addEventListener('click', e => {
        playerSelection = e.target.innerText;
        gameOn();
    })
})

giveUp.addEventListener('click', () => {
    chooseDeath = true;
    playerHP = 0;
    enemyHP = 0;
    gameOn();
})

displayScore();