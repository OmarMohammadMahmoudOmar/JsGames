let userScore = 0,
  compScore = 0;
const userScore_div = document.getElementById('user-score'),
  compScore_div = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const rock_div = document.querySelector('#r'),
  paper_div = document.querySelector('#p'),
  scissors_div = document.querySelector('#s');
const choices = document.getElementsByClassName('choice');

function getCompChoice() {
  const choices = ['r', 's', 'p'];
  randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}
function convertChoice(choice) {
  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 's':
      choice = 'scissors';
      break;
  }
  return choice;
}
function lastTouch(div, className) {
  Object.values(choices).forEach((choice) => {
    choice.classList.remove('green_glow') || choice.classList.remove('red_glow') || choice.classList.remove('grey_glow') || undefined;
  });

  div.classList.toggle(className);
  setTimeout(() => {
    div.classList.remove(className);
  }, 300);
}
function win(user, computer) {
  userScore++;
  userScore_div.innerHTML = userScore;

  userChoice_div = document.getElementById(user);

  result_p.innerHTML = `User'${convertChoice(user)} beats Computer'${convertChoice(computer)}, You won :)`;

  lastTouch(userChoice_div, 'green-glow');
}

function lose(user, computer) {
  compScore++;
  compScore_div.innerHTML = compScore;
  userChoice_div = document.getElementById(user);

  result_p.innerHTML = `User'${convertChoice(user)} doesn't beat Computer'${convertChoice(computer)}, You Lost :(`;

  lastTouch(userChoice_div, 'red-glow');
}

function draw(user, computer) {
  result_p.innerHTML = `User'${convertChoice(user)} is the same with Computer'${convertChoice(computer)}, It's a draw :|`;
  userChoice_div = document.getElementById(user);

  lastTouch(userChoice_div, 'grey-glow');
}

function game(userChoice) {
  const compChoice = getCompChoice();
  var result;
  switch (userChoice + compChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, compChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, compChoice);
      break;
    default:
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => {
    game('r');
    getCompChoice();
  });
  paper_div.addEventListener('click', () => {
    game('p');
  });
  scissors_div.addEventListener('click', () => {
    game('s');
  });
}
main();
