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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;

// We display the score
document.querySelector('.score').textContent = score;
// We display the secret number
document.querySelector('.number').textContent = secretNumber;

// We add a event listener on the click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.guess').value = 'No Number';
  } else if (score > 1) {
    // When player wins
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct number!';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // When guess is too high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;

      // When guess is too low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Game Over!';
  }
});
