document.onclick = function hide(event) {
  const click = event.target;
  if (click.tagName !== 'BUTTON' && click.className !== 'keyboard' && click.className !== 'klava' && click.className !== 'input') {
    const element = document.querySelector('div.wrapper');
    if (element.classList.contains('show-block')) {
      element.classList.remove('show-block');
    }
  }
};
