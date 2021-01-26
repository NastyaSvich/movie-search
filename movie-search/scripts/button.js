const btn = document.getElementById('klava');
btn.onclick = function srkit(e) {
  const element = document.querySelector('div.wrapper');
  if (element.classList.contains('show-block')) {
    element.classList.remove('show-block');
    element.classList.add('no-show-block');
  } else {
    element.classList.add('show-block');
    element.classList.remove('no-show-block');
  }
};
