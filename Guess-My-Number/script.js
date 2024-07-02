'use strict';

let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(sNumber);

const checkFunction = function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (score < 2) {
      document.querySelector('.message').textContent = '💥 You lost the Game!';
      document.querySelector('.score').textContent = 0;
      return;
    }
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number';
    } else if (guess > sNumber) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
    } else if (guess < sNumber) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
    } else if (guess === sNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = sNumber;
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    document.querySelector('.score').textContent = score;
  }

const againFunction = function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    sNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    console.log(sNumber);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
  }

document.querySelector('.check').addEventListener('click', checkFunction);

document.querySelector('.again').addEventListener('click', againFunction);
