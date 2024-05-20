"use strict";

//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let score0 = document.querySelector("#score--0");
let score1 = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate the random dice roll
    let randomNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(randomNumber);

    //2. display the dice
    dice.classList.remove("hidden"); //just pass the name of the class (do not select the class like ".hidden")
    dice.src = `dice-${randomNumber}.png`;

    //3. chieck if the rolled dice is 1, if yes, then switch to next player
    if (randomNumber != 1) {
      //add dice to current score
      currentScore += randomNumber;
      //display the score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. add the current score to the active player
    scores[activePlayer] = scores[activePlayer] + currentScore;
    //2. check if score >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      dice.classList.add("hidden");
      //finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      //display the total score
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    } else {
      //display the total score
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      //switch the active player
      switchPlayer();
    }
  }
});
