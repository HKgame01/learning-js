'use strict';

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const name0 = document.querySelector("#name--0");
const name1 = document.querySelector("#name--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

const resetGame = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add("hidden")
    scores = [0,0];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = 0;
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
  }

resetGame();

const diceRoll = function () {
    return Math.trunc(Math.random()*6)+1;
}

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    
    currentScore = 0;
    activePlayer = activePlayer===0?1:0;
  }

btnRoll.addEventListener('click', function () {
    if (scores[activePlayer]<100){
    dice.classList.remove("hidden");
    const rno = diceRoll();
    dice.src = `dice-${rno}.png`;
    console.log(rno);
    if (rno!==1){
        currentScore+=rno;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else{
        switchPlayer();
    }}

})

btnHold.addEventListener('click', function () {
    if (scores[activePlayer]<100){
    scores[activePlayer] = scores[activePlayer]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer]>=100){
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        return;
    }
    switchPlayer();}
  })

btnNew.addEventListener('click', resetGame)