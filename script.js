"use strict";

//selecting elements
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

let currentScore = 0;

btnRoll.addEventListener("click", function () {
  //1. generate the random dice roll
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  //2. display the dice
  dice.classList.remove("hidden"); //just pass the name of the class (do not select the class like ".hidden")
  dice.src = `dice-${randomNumber}.png`;

  //3. chieck if the rolled dice is 1, if yes, then switch to next player
  if (dice != 1) {
    //add dice to current score
    currentScore += randomNumber;
    //display the score
    current0El.textContent = currentScore;
  } else {
    //switch to next player
  }
});
