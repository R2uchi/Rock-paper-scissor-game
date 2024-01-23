function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerHTML = 'You chose ' + userChoice + '. The computer chose ' + computerChoice + '. ' + result;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }

    return 'You lose!';
}