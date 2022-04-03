function computerPlay() {
    const rps = Math.floor(Math.random()*10)
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

function convertInput () {
    return userInput.toLowerCase()
}

function checkInput () {
    if (convertInput() === 'rock') {
        return 'Rock'
    }
    else if (convertInput() === 'paper') {
        return 'Paper'
    }
    else if (convertInput() === 'scissor') {
        return 'Scissor'
    }
    else {
        userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ');
        checkInput ();
    }
}

function playRound () {
    let playerSelection = checkInput()
    let computerSelection = computerPlay()

    if (playerSelection === computerPlay) {
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
    for (let i = 0; i < 5; i++) {
        userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ');
        let computerScore = 0;
        let playerScore = 0;
        checkInput();
        playRound();
        if (playRound () === `You Lose!. ${computerSelection} beats ${playerSelection}.`) {
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

function checkInputYesNo () {
    if (convertInput() === 'yes') {
        return 'Yes'
    }
    else if (convertInput() === 'no') {
        return 'No'
    }
    else {
        userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ');
        checkInput ();
    }
}

function gameFinish () {

}

let userInput;

