let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let btnInnerHTML = this.innerHTML;
    console.log(btnInnerHTML);
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case 'w':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play;
      // alert('Tom1 was played');
      break;
    case 'a':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play;
      // alert('Tom2 was played');
      break;
    case 's':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play;
      // alert('Tom3 was played');
      break;
    case 'd':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play;
      // alert('Tom4 was played');
      break;
    case 'j':
      let snare = new Audio('sounds/snare.mp3');
      snare.play;
      // alert('Snare was played');
      break;
    case 'k':
      let crash = new Audio('sounds/crash.mp3');
      crash.play;
      // alert('Crash was played');
      break;
    case 'l':
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play;
      // alert('KIck was played');
      break;
  }
}

function buttonAnimation(currentKey) {
  document.querySelector('.' + currentKey).classList.add('active');
  setTimeout(() => {
    document.querySelector('.' + currentKey).classList.remove('active');
  }, 100);
}
