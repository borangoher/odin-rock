const resultBox = document.querySelector('#result');
const pScoreBox = document.querySelector('#player-score');
const cScoreBox = document.querySelector('#computer-score');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', game);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', game);

let noTurns = parseInt(prompt("For how many turns will you play?", "1"));
let playerScore = 0;
let compScore = 0;
let playerMove;

function computerMove  () {
    let rand = Math.random();
    if (rand <= 0.333) {
        return "ROCK";
    } else if (rand <= 0.666) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function computeWinner (pMove, cMove) {
    let pNo, cNo;
    if (pMove == "ROCK") {
        pNo = 2;
    } else if (pMove == "PAPER") {
        pNo = 3;
    } else {
        pNo = 5;
    }

    if (cMove == "ROCK") {
        cNo = 7;
    } else if (cMove == "PAPER") {
        cNo = 11;
    } else {
        cNo = 13;
    }

    let prod = cNo * pNo;

    const winCond = [2*13, 3*7, 5*11];
    const loseCond = [5*7, 3*13, 2*11];

    if (winCond.includes(prod)) {
        return 1;
    } else if (loseCond.includes(prod)) {
        return 2;
    } else {
        return 3;
    }

}

function gameLogic (playerMove, cpuMove) {
    let winner = computeWinner(playerMove, cpuMove);

    if (winner == 1) {
        resultBox.textContent = `Congrats! You won! ${playerMove} beats ${cpuMove}.`;
        return 1;
    } else if (winner == 2) {
        resultBox.textContent = `You lost. ${cpuMove} beats ${playerMove}.`;
        return 2;
    } else {
        resultBox.textContent = `It's a draw. Both players played ${playerMove}.`;
        return 3;
    }
}

function gameProper (playerMove) {
    let cpuMove, winner;
    
    cpuMove = computerMove();
    winner = gameLogic(playerMove, cpuMove);

    if (winner == 1) {
        playerScore += 1;
        pScoreBox.textContent = playerScore.toString();
    } else if (winner == 2) {
        compScore += 1;
        cScoreBox.textContent = compScore.toString();
    }
}

function game () {
    noTurns--;
    
    if (noTurns>0) {
        
        if (this.id == "rock"){
            playerMove = "ROCK";
        } else if (this.id == "paper"){
            playerMove = "PAPER";
        } else {
            playerMove = "SCISSORS";
        }

        gameProper(playerMove);
    } else {
        if (playerScore > compScore) {
            resultBox.textContent = "You win!";
        } else if (playerScore < compScore) {
            resultBox.textContent = "You lose.";
        } else {
            resultBox.textContent = "It's a draw.";
        }
    }
}


