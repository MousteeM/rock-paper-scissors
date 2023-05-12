const choices = ['rock', 'paper', 'scissors']
let userScore = 0

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const triangleImage = document.querySelector('.triangle')
const score = document.querySelector('.score')
const statusText = document.querySelector('.status-text')
statusText.style.display = 'none'

// function to randomize computer selection
const randomChoice = function() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices.at(randomIndex)
}
const computerChoice = randomChoice()
console.log(computerChoice)

// compare user and computer xhice6
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
  if(winner === 'user') {
    statusText.textContent = 'You Win!'
    statusText.style.display = 'block'
    userScore += 1
  } else if(winner === 'computer' && userScore > 0){
    statusText.textContent = 'You Lose!'
    statusText.style.display = 'block'
    userScore -= 1
  } else if (winner === 'draw'){
    statusText.textContent = 'Draw!'
    statusText.style.display = 'block'
  }
  score.textContent = userScore
}


function playGame() {
  //add event listener for play buttons
  paper.addEventListener('click', () => {
    const checkWinner = compareChoices('paper', randomChoice())
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  rock.addEventListener('click', () => {
    const checkWinner = compareChoices('rock ', randomChoice())
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  scissors.addEventListener('click', () => {
    const checkWinner = compareChoices('scissors', randomChoice())
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  
}

//console.log(compareChoices(userChoice, computerChoice))
//console.log(`user choice: ${userChoice}, computer choice: ${computerChoice}`)
//console.log(rock, paper, scissors)

playGame()