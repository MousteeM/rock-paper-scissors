const choices = ['rock', 'paper', 'scissors']
let userScore = 0

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const triangleImage = document.querySelector('.triangle')
const score = document.querySelector('.score')
const statusText = document.querySelector('.status-text')
const playAgain = document.querySelector('.play-again')

playAgain.style.opacity = 0
//statusText.style.display = 'none'

// function to randomize computer selection
const randomChoice = function() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices.at(randomIndex)
}

const computerChoice = randomChoice()
console.log(computerChoice)


// compare user and computer choice
function compareChoices(user, computer) {
  if (user === computer) {
    return 'draw'
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'user'
  } else
    return 'computer'
}

function updateScore(winner) {
  console.log('Winner:', winner);
  if (winner === 'user') {
    statusText.textContent = 'You Win!'
    statusText.style.opacity = 1
    // statusText.style.display = 'block'
    userScore += 1
  } else if (winner === 'computer' && userScore > 0) {
    statusText.textContent = 'You Lose!'
    statusText.style.opacity = 1
    // statusText.style.display = 'block'
    userScore -= 1
  } else if (winner === 'draw') {
    statusText.textContent = 'Draw!'
    statusText.style.opacity = 1
    // statusText.style.display = 'block'
  } else {
    statusText.textContent = 'You Lose!'
    statusText.style.opacity = 1
    // statusText.style.display = 'block'
  }
  score.textContent = userScore
}

function switchState(element) {
  triangleImage.style.opacity = 0
  playAgain.style.opacity = 1
  if (element === paper) {
    scissors.style.opacity = 0
    rock.style.opacity = 0
  } else if (element === scissors) {
    paper.style.opacity = 0
    rock.style.opacity = 0
  } else if (element === rock) {
    scissors.style.opacity = 0
    //paper.style.opacity = 0
  }
}

function getDistance(elem1, elem2) {
  const rect1 = elem1.getBoundingClientRect();
  const rect2 = elem2.getBoundingClientRect();
  const distanceX = rect1.left - rect2.left;
  const distanceY = rect1.top - rect2.top;

  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
};

const distanceRockPaper = getDistance(rock, paper);
const distanceRockScissors = getDistance(rock, scissors);
const distancePaperScissors = getDistance(paper, scissors);

// function displayComputerChoice(choice) {
//   if(choice === 'rock') {
//     rock.style.opacity = 1
//   } else if(choice === 'scissors') {
//     scissors.style.opacity = 1
//   } else {
//     paper.style.opacity = 1
//   }
//   console.log('hi')
// }

function displayBothChoices(userChoice, computerChoice) {
  if(userChoice === 'rock') {
    rock.style.opacity = 1
  } else if(userChoice === 'scissors') {
    scissors.style.opacity = 1
  } else {
    paper.style.opacity = 1
  }

  setTimeout(() => {
    if(computerChoice === 'rock') {
      rock.style.opacity = 1
    } else if(computerChoice === 'scissors') {
      scissors.style.opacity = 1
    } else {
      paper.style.opacity = 1
    }
  }, 2000)
}

function playGame() {
  //add event listener for play buttons
  paper.addEventListener('click', () => {
    const computerChoice = randomChoice()
    const checkWinner = compareChoices('paper', computerChoice)
    switchState(paper)
    updateScore(checkWinner)
    displayBothChoices('paper', computerChoice)
    console.log(checkWinner)
  })
  rock.addEventListener('click', () => {
    const computerChoice = randomChoice()
    const checkWinner = compareChoices('rock', computerChoice)
    const rockRect = rock.getBoundingClientRect();
    const paperRect = paper.getBoundingClientRect();
    const distanceX = paperRect.x - rockRect.x;
    const distanceY = paperRect.y - rockRect.y;
    rock.style.transition = 'transform 1s';
    rock.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
    switchState(rock)
    updateScore(checkWinner)
    displayBothChoices('rock', computerChoice)
    console.log(checkWinner)
  })
  scissors.addEventListener('click', () => {
    const computerChoice = randomChoice()
    const checkWinner = compareChoices('scissors', computerChoice)
    scissors.style.transition = 'transform 2'
    scissors.style.translate = `${-distancePaperScissors}px`
    switchState(scissors)
    updateScore(checkWinner)
    displayBothChoices('scissors', computerChoice)
    console.log(checkWinner)
  })
}

playGame()


playGame()