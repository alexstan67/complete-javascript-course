'use strict';
/*
const a = document.querySelector('.message').textContent;
console.log(a);
document.querySelector('.message').textContent = 'Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
*/

// We define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// We display the score
document.querySelector('.score').textContent = score;
// We display the secret number
//document.querySelector('.number').textContent = secretNumber;

// We clear the guess input box
document.querySelector('.guess').value = '';

// We add a event listener on the click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.guess').value = 'No Number';
  } else if (score > 1) {
    // When player wins
    if (guess === secretNumber) {
      displayMessage('🏆 Correct number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // We set the highscore
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // When guess is different
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!!');
    }
  }
});

// We add a event listener on the play again button
document.querySelector('.again').addEventListener('click', function () {
  // We clear the green background
  document.querySelector('body').style.backgroundColor = '#222';

  // We re-initalize the score
  score = 20;
  document.querySelector('.score').textContent = score;

  // We scale the number box to original size
  document.querySelector('.number').style.width = '15rem';

  // We clear the guess box
  document.querySelector('.guess').value = '';

  // We initialize the message
  displayMessage('Start guessing...');

  // We set a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
