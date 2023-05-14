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
    scissors.style.display = 'none'
    rock.style.display = 'none'
  } else if (element === scissors) {
    paper.style.display = 'none'
    rock.style.display = 'none'
  } else if (element === rock) {
    scissors.style.display = 'none'
    paper.style.display = 'none'
  }
}


function playGame() {
  //add event listener for play buttons
  paper.addEventListener('click', () => {
    const checkWinner = compareChoices('paper', randomChoice())
    switchState(paper)
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  rock.addEventListener('click', () => {
    //moveElement(rock)
    const checkWinner = compareChoices('rock ', randomChoice())
    switchState(rock)
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  scissors.addEventListener('click', () => {
    //moveElement(scissors)
    const checkWinner = compareChoices('scissors', randomChoice())
    switchState(scissors)
    updateScore(checkWinner)
    console.log(checkWinner)
  })
}

playGame()