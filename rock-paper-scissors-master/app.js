const choices = ['rock', 'paper', 'scissors']
let userScore = 0

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const triangleImage = document.querySelector('.triangle')
const score = document.querySelector('.score')
const statusText = document.querySelector('.status-text')
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


function playGame() {
  //add event listener for play buttons
  paper.addEventListener('click', () => {
    const checkWinner = compareChoices('paper', randomChoice())
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  rock.addEventListener('click', () => {
    moveElement(rock)
    const checkWinner = compareChoices('rock ', randomChoice())
    updateScore(checkWinner)
    console.log(checkWinner)
  })
  scissors.addEventListener('click', () => {
    moveElement(scissors)
    const checkWinner = compareChoices('scissors', randomChoice())
    updateScore(checkWinner)
    console.log(checkWinner)
  })
}

// function moveElement(element) {
//   let position = 0
//   let moveScissors = setInterval(animateScissors, 2)
//   let moveRock = setInterval(animateRock, 2)
  
  
//   function animateScissors() {
//     if(position === 177) {
//       clearInterval(moveScissors)
//     } else {
//       position++
//       element.style.right = `${position}px`
//     }
//   }
//   function animateRock() {
//     if(position === 2) {
//       clearInterval(moveRock)
//     } else {
//       position++
//       element.style.bottom = `${position}px`
//       element.style.right = `${position}px`
//     }
//   }
  
// }

function moveElement(element) {
  let position = 0
  let animateElement = setInterval(animate, 2)
  
  function animate() {
    if(position === 177) {
      clearInterval(animateElement)
    } else {
      position++
      element.style.right = `${position}px`
      
      if (element === rock) {
        element.style.bottom = `${position}px`
      }
    }
  }
} 

// function moveElement(element) {
//   let position = 0;
//   let animateElement;

//   if (element === 'rock') {
//     animateElement = setInterval(animateRock, 2);
//   } else if (element === 'scissors') {
//     animateElement = setInterval(animateScissors, 2);
//   }

//   function animateScissors() {
//     if (position === 177) {
//       clearInterval(animateElement);
//     } else {
//       position++;
//       element.style.right = `${position}px`;
//     }
//   }

//   function animateRock() {
//     if (position === 177) {
//       clearInterval(animateElement);
//     } else {
//       position++;
//       element.style.bottom = `${position}px`;
//       element.style.right = `${position}px`;
//     }
//   }
  
//   if (element !== 'paper') {
//     // let triangle = document.getElementById('triangle');
//     // triangle.style.display = 'none';
//     element.addEventListener('click', function () {
//       if (animateElement) clearInterval(animateElement);
//       let paper = document.getElementById('paper');
//       paper.style.position = 'relative';
//       paper.style.right = `${position}px`;
//       paper.style.bottom = `${position}px`;
//     });
//   }
//} 
playGame()