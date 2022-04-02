function computerPlay() {
    const rps = Math.floor(Math.random()*10)
    if (rps >= 1 && rps <= 3) {
        return 'Rock'
    }
    else if (rps >= 4 && rps <= 6) {
        return 'Paper'
    }
    else if (rps >= 7 && rps <= 9) {
        return 'Scissor'
    }
}