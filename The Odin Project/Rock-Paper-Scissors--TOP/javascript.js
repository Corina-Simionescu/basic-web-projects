let winners = [];

function game()
{
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) =>
  {
    button.addEventListener("click", () =>
    {
      if (winners.length <= 4)
        playRound(button.className);
      else
      {
        gameWinner();
        const resetGame = document.querySelector('.resetGame');
        resetGame.textContent = 'Refresh the page to play another game :)';
      }
    });
  })
}

function playRound(playerSelection)
{
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);

  displayRoundWinner(winner, playerSelection, computerSelection);
}

function computerChoice()
{
  choices = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function checkWinner(playerSelection, computerSelection)
{
  if (playerSelection === computerSelection) return "tie";
  else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    playerSelection === 'scissors' && computerSelection === 'paper')
    return 'player';

  return 'computer';
}

let playerScore = 0, computerScore = 0;

function displayRoundWinner(winner, playerSelection, computerSelection)
{
  const round = document.querySelector('.round');
  const playerS = document.querySelector('.playerS');
  const computerS = document.querySelector('.computerS');
  const roundResultText = document.querySelector('.roundResultText');
  const score = document.querySelector('.score');

  round.textContent = '--------------- ROUND ' + winners.length + ' ---------------';
  playerS.textContent = 'You chose: ' + playerSelection;
  computerS.textContent = 'Computer chose: ' + computerSelection;

  if (winner === 'player')
  {
    roundResultText.textContent = "You won!";
    ++playerScore;
  }
  else if (winner === 'computer')
  {
    roundResultText.textContent = "Computer won";
    ++computerScore;
  }
  else
    roundResultText.textContent = "It's a tie";

  score.textContent = playerScore + ' - ' + computerScore;
}

function gameWinner()
{
  const round = document.querySelector('.round');
  const playerS = document.querySelector('.playerS');
  const computerS = document.querySelector('.computerS');
  const roundResultText = document.querySelector('.roundResultText');
  const score = document.querySelector('.score');

  round.textContent = '';
  playerS.textContent = '';
  computerS.textContent = '';
  roundResultText.textContent = '';
  score.textContent = '';

  const finalWinner = document.querySelector('.finalWinner');

  let playerWins = winners.filter((item) => item == 'player').length;
  let computerWins = winners.filter((item) => item == 'computer').length;

  if (playerWins > computerWins) finalWinner.textContent = 'YEEY, YOU WOOON !!!';
  else if (playerWins < computerWins) finalWinner.textContent = 'The computer won';
  else finalWinner.textContent = "Bleah, it's a tie";
}

game();