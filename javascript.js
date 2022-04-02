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
    else false
}

function playRound (playerSelection, computerSelection) {
    playerSelection = checkInput()
    computerSelection = computerPlay()

    if (playerSelection === computerPlay) {
        return `You tie!. ${playerSelection} and ${computerSelection} are equal.`
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You Lose!. ${computerSelection} beats ${playerSelection}.`
    }
}

let userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ')