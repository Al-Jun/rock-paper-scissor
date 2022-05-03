function computerPlay() {
    const rps = Math.floor(Math.random()*9)
    if (rps >= 0 && rps <= 2) {
        computerSelection = 'ATTACK!';
    }
    else if (rps >= 3 && rps <= 5) {
        computerSelection = 'COUNTER!';
    }
    else if (rps >= 6 && rps <= 8) {
        computerSelection = 'CHARGED ATTACK!';
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
    else if (playerSelection === 'ATTACK!' && computerSelection === 'CHARGED ATTACK!') {
        return "WIN"
    }
    else if (playerSelection === 'CHARGED ATTACK!' && computerSelection === 'ATTACK!') {
        return "LOSE"
    }
    else if (playerSelection === 'CHARGED ATTACK!' && computerSelection === 'COUNTER!') {
        return "WIN"
    }
    else if (playerSelection === 'COUNTER!' && computerSelection === 'CHARGED ATTACK!') {
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
    if ((enemyHP === 0 || playerHP === 0) && enemyHP > playerHP) {
        chooseDeath = true;
        endResult = 'You Lose!';
        gameOn();
    }
    else if ((enemyHP === 0 || playerHP === 0) && enemyHP < playerHP) {
        chooseDeath = true;
        endResult = 'You Win!';
        gameOn();
    }
    else if (enemyHP > playerHP) {
        endResult = 'You Lose!';
        return 'You Lose!';
    }
    else if (enemyHP < playerHP) {
        endResult = 'You Win!';
        return 'You Win!';
    }
    else {
        endResult = 'You Tie!';
        return 'You Tie!';
    }
}

function gameOn () {
    if (chooseDeath) {
        insideCon.classList.add('delete');
        output.classList.add('output-play');
        p.style.fontWeight = 'bolder';
        p.style.fontSize = '24px';
        p.textContent = `Game Over!\r\n\r\n${endResult}`;
        output.appendChild(p);
    }
    else {
        if (playRound () === "LOSE") {
            --playerHP;
            p.textContent = `You Lose!.\r\n\r\n${computerSelection} beats ${playerSelection}.`;
            output.appendChild(p);
            displayScore();
            checkScore();
        }
        else if (playRound () === "WIN") {
            --enemyHP;
            p.textContent = `You Win!.\r\n\r\n${playerSelection} beats ${computerSelection}.`;
            output.appendChild(p);
            displayScore();
            checkScore();
        }
        else {
            tieStyle();
            p.textContent = `You Tie!.\r\n\r\n${playerSelection} and ${computerSelection} are equal.`;
            output.appendChild(p);
            displayScore();
            checkScore();
        }
    }
}

function gameOver() {
    chooseDeath = true;
}

function winStyle () {
    p.style.whiteSpace = 'pre';
    p.style.color = 'rgba(218, 187, 17)';
    p.style.textShadow = '-1px -1px 0 #090909, 1px -1px 0 #090909, -1px 1px 0 #090909, 1px 1px 0 #090909';
    p.style.textAlign = 'center';
}

function loseStyle () {
    p.style.whiteSpace = 'pre';
    p.style.color = 'darkgray';
    p.style.textShadow = '-1px -1px 0 #090909, 1px -1px 0 #090909, -1px 1px 0 #090909, 1px 1px 0 #090909';
    p.style.textAlign = 'center';
}

function tieStyle () {
    p.style.whiteSpace = 'pre';
    p.style.color = 'white';
    p.style.textShadow = '-1px -1px 0 #090909, 1px -1px 0 #090909, -1px 1px 0 #090909, 1px 1px 0 #090909';
    p.style.textAlign = 'center';
}

const choice = document.querySelectorAll('.move');
const giveUp = document.querySelector('.give-up');
const playerHPMessage = document.querySelector('.player-hp');
const enemyHPMessage = document.querySelector('.enemy-hp');
const insideCon = document.querySelector('.inside-container');
const output = document.querySelector('.output');
const p = document.createElement('p');

let playerSelection;
let computerSelection;
let playerHP = 5;
let enemyHP = 5;
let chooseDeath;
let endResult = 'You Tie!';

choice.forEach(item => {
    item.addEventListener('click', e => {
        playerSelection = e.target.innerText;
        item.classList.add('playing');
        output.classList.add('output-play');
        gameOn();
    })
    item.addEventListener('transitionend', () => {
        item.classList.remove('playing');
    })
})

giveUp.addEventListener('click', () => {
    gameOver();  
    gameOn();
    insideCon.addEventListener('transitionend', () => {
        insideCon.remove();
        output.style.marginTop = '40vh'; 
    });
    insideCon.classList.add('delete');
})

displayScore();