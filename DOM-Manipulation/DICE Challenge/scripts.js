let Head = document.querySelector('h1');
let dice1 = document.querySelector('.img1 img');
let dice2 = document.querySelector('.img2 img');
let resetBTN = document.getElementById('resetButton');
let dice1Container = document.querySelector('.img1');
let dice2Container = document.querySelector('.img2');

const randInt = Math.floor(Math.random() * 6 + 1);
const randInt2 = Math.floor(Math.random() * 6 + 1);
console.log(randInt);
console.log(randInt2);

window.addEventListener('DOMContentLoaded', () => {
  // All Logic goes here
  console.log("Page loaded or reloaded! Here's something new.");
  dice1.setAttribute('src', `Assets/dice${randInt}.png`);
  dice2.setAttribute('src', `Assets/dice${randInt2}.png`);
  Head.textContent =
    randInt === randInt2
      ? '🏁 Draw 🚩'
      : randInt > randInt2
      ? '🏁Player 1 wins'
      : 'Player 2 Wins🚩';

  resetBTN.classList.remove('disabled');
  document.querySelectorAll('div > img').forEach((img) => {
    img.style.height = '20rem';
  });
  Head.classList.remove('hidden');
  dice1Container.classList.remove('hidden');
  dice2Container.classList.remove('hidden');
});

resetBTN.addEventListener('click', () => {
  dice1.setAttribute('src', 'Assets/dice6.png');
  dice2.setAttribute('src', 'Assets/dice6.png');
  Head.textContent = 'Refresh Me';
  resetBTN.classList.add('disabled');
});
