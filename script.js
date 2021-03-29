const computerPlay = () => {
    // Create a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    // Select a move according to the random number
    switch (randomNumber) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
};

const winMessage = (move1, move2) => {
    return `You Win! ${move1} beats ${move2}`;
};

const loseMessage = (move1, move2) => {
    return `You Lose! ${move1} can't beat ${move2}`;
};

const tieMessage = (move1, move2) => {
    return `It's a tie! ${move1} and ${move2}`;
};

const playRound = (playerSel, computerSel) => {
    if (playerSel == computerSel) return tieMessage(playerSel, computerSel);

    let playerWon = false;
    if (playerSel == 'Rock' && computerSel == 'Scissors') playerWon = true;
    if (playerSel == 'Paper' && computerSel == 'Rock') playerWon = true;
    if (playerSel == 'Scissors' && computerSel == 'Paper') playerWon = true;

    if (playerWon) return winMessage(playerSel, computerSel);
    // else
    return loseMessage(playerSel, computerSel);
};

function game(e) {
    let score = document.querySelector('#score');
    let resultPara = document.querySelector('#result');

    // Repeat round until one of them gets 5 points
    if (!(playerScore == 5 || computerScore == 5)) {
        // Play round and store it in a variable
        let roundResult = playRound(this.textContent, computerPlay());
        resultPara.textContent = roundResult;
        // Add or s0ubstract points according to the result
        if (roundResult.includes('Win')) playerScore++;
        if (roundResult.includes('Lose')) computerScore++;
        // Display current scores
        score.textContent = `Player ${playerScore} - Computer ${computerScore}`;
    }

    if (playerScore == 5) resultPara.textContent = 'Congratulations, you have won 5 rounds!';
    if (computerScore == 5)
        resultPara.textContent = 'The computer has won 5 rounds, better luck next time!';
}

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

let buttons = document.querySelectorAll('.option');
let score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', game);
});
