document.querySelectorAll('.drum').forEach((btn) => {
  btn.addEventListener('click', handleClick);
});

function handleClick() {
  alert('Hello !! , I got clicked');
}
