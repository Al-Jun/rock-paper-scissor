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
    if (convertInput() === rock || convertInput() === paper || convertInput() === scissor) {
        return true
    }
    else false
}

function playRound (playerSelection, computerSelection) {
    
}

let userInput = prompt('Please Choose your move: Rock, Paper, or Scissor? ')