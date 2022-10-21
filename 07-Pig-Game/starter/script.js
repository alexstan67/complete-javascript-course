'use strict';

// Initialize variables
let dice, currentScore, scores, activePlayer, playing;

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Functions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('#score--0').textContent = scores[0];
  document.getElementById('score--1').textContent = scores[1];

  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Game Start
init();

// Event Listeners
btnRoll.addEventListener('click', function () {
  // We check if we are still playing
  if (playing) {
    // Generate random dice roll
    dice = Math.trunc(Math.random() * 6) + 1;

    // Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled1: if true switch to next player
    if (dice > 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // We switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // We check if we are still playing
  if (playing) {
    // We hold the score
    scores[activePlayer] += currentScore;

    // We display updated scores
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if score > 100
    if (scores[activePlayer] >= 100) {
      // The player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // We hide the dice
      diceEl.classList.add('hidden');

      // We end the game
      playing = false;
    } else {
      // current score is initialized
      currentScore = 0;

      // We switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
