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

function getPlayerMove () {
    let move;
    const validMoves = ["ROCK", "PAPER", "SCISSORS"];

    while (true) {
       move = prompt("What move will you play?", "rock");
       move = move.toUpperCase();

       if (!(validMoves.includes(move))){
        console.log("Please play a valid move.");
       } else {
           break;
       }
    }

    return move;
}

function gameLogic (playerMove, cpuMove) {
    let winner = computeWinner(playerMove, cpuMove);

    if (winner == 1) {
        console.log(`Congrats! You won! ${playerMove} beats ${cpuMove}.`);
        return 1;
    } else if (winner == 2) {
        console.log(`You lost. ${cpuMove} beats ${playerMove}.`);
        return 2;
    } else {
        console.log(`It's a draw. Both players played ${playerMove}.`);
        return 3;
    }
}

function gameProper () {
    let noTurns = parseInt(prompt("For how many turns will you play?", "1"));

    let i;
    let playerScore = 0;
    let compScore = 0;
    let cpuMove, playerMove, winner;

    for(i=0; i<noTurns; i++) {
        cpuMove = computerMove();
        playerMove = getPlayerMove();
        winner = gameLogic(playerMove, cpuMove);

        if (winner == 1) {
            playerScore += 1;
        } else if (winner == 2) {
            compScore += 1;
        }
    }

    if (playerScore > compScore) {
        console.log("You win!");
    } else if (playerScore < compScore) {
        console.log("You lose.");
    } else {
        console.log("It's a draw.");
    }
}

gameProper()