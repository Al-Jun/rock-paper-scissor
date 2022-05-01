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
    if ((enemyHP === 0 || playerHP === 0) && enemyHP > playerHP) gameOver();
    else if ((enemyHP === 0 || playerHP === 0) && enemyHP < playerHP) gameOver();
    else if (enemyHP > playerHP) return 'You Lose!';
    else if (enemyHP < playerHP) return 'You Win!';
    else return 'You Tie!'
}

function gameOn () {
    if (chooseDeath) {
        console.log(`Game Over!\n\n${checkScore()}`)
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

function gameOver() {
    chooseDeath = true;
}

const choice = document.querySelectorAll('.move');
const giveUp = document.querySelector('.give-up');
const playerHPMessage = document.querySelector('.player-hp');
const enemyHPMessage = document.querySelector('.enemy-hp');
const insideCon = document.querySelector('.inside-container');

let playerSelection;
let computerSelection;
let playerHP = 5;
let enemyHP = 5;
let chooseDeath;

choice.forEach(item => {
    item.addEventListener('click', e => {
        playerSelection = e.target.innerText;
        item.classList.add('playing');
        gameOn();
    })
    item.addEventListener('transitionend', () => {
        item.classList.remove('playing');
    })
})

giveUp.addEventListener('click', () => {
    gameOver();  
    gameOn();
    insideCon.addEventListener('transitionend', () => insideCon.remove());
    insideCon.classList.add('delete');
})

displayScore();