const buttons = [
  {
    code: 'Backquote', en: '`', ru: 'ё', shift: { en: '`', ru: 'ё' }, printable: true,
  },
  {
    code: 'Digit1', en: '1', ru: '1', shift: { en: '!', ru: '!' }, printable: true,
  },
  {
    code: 'Digit2', en: '2', ru: '2', shift: { en: '@', ru: '"' }, printable: true,
  },
  {
    code: 'Digit3', en: '3', ru: '3', shift: { en: '#', ru: '№' }, printable: true,
  },
  {
    code: 'Digit4', en: '4', ru: '4', shift: { en: '$', ru: ';' }, printable: true,
  },
  {
    code: 'Digit5', en: '5', ru: '5', shift: { en: '%', ru: '%' }, printable: true,
  },
  {
    code: 'Digit6', en: '6', ru: '6', shift: { en: '^', ru: ':' }, printable: true,
  },
  {
    code: 'Digit7', en: '7', ru: '7', shift: { en: '&', ru: '?' }, printable: true,
  },
  {
    code: 'Digit8', en: '8', ru: '8', shift: { en: '*', ru: '*' }, printable: true,
  },
  {
    code: 'Digit9', en: '9', ru: '9', shift: { en: '(', ru: '(' }, printable: true,
  },
  {
    code: 'Digit0', en: '0', ru: '0', shift: { en: ')', ru: ')' }, printable: true,
  },
  {
    code: 'Minus', en: '-', ru: '-', shift: { en: '_', ru: '_' }, printable: true,
  },
  {
    code: 'Equal', en: '=', ru: '=', shift: { en: '+', ru: '+' }, printable: true,
  },
  {
    code: 'Backspace', en: 'Backspace', ru: 'Backspace', printable: false,
  },
  {
    code: 'Tab', en: 'Tab', ru: 'Tab', printable: false,
  },
  {
    code: 'KeyQ', en: 'q', ru: 'й', printable: true,
  },
  {
    code: 'KeyW', en: 'w', ru: 'ц', printable: true,
  },
  {
    code: 'KeyE', en: 'e', ru: 'у', printable: true,
  },
  {
    code: 'KeyR', en: 'r', ru: 'к', printable: true,
  },
  {
    code: 'KeyT', en: 't', ru: 'е', printable: true,
  },
  {
    code: 'KeyY', en: 'y', ru: 'н', printable: true,
  },
  {
    code: 'KeyU', en: 'u', ru: 'г', printable: true,
  },
  {
    code: 'KeyI', en: 'i', ru: 'ш', printable: true,
  },
  {
    code: 'KeyO', en: 'o', ru: 'щ', printable: true,
  },
  {
    code: 'KeyP', en: 'p', ru: 'з', printable: true,
  },
  {
    code: 'BracketLeft', en: '[', ru: 'х', shift: { en: '{', ru: 'х' }, printable: true,
  },
  {
    code: 'BracketRight', en: ']', ru: 'ъ', shift: { en: '}', ru: 'ъ' }, printable: true,
  },
  {
    code: 'Backslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true,
  },
  {
    code: 'Delete', en: 'DEL', ru: 'DEL', printable: false,
  },
  {
    code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', printable: false,
  },
  {
    code: 'KeyA', en: 'a', ru: 'ф', printable: true,
  },
  {
    code: 'KeyS', en: 's', ru: 'ы', printable: true,
  },
  {
    code: 'KeyD', en: 'd', ru: 'в', printable: true,
  },
  {
    code: 'KeyF', en: 'f', ru: 'а', printable: true,
  },
  {
    code: 'KeyG', en: 'g', ru: 'п', printable: true,
  },
  {
    code: 'KeyH', en: 'h', ru: 'р', printable: true,
  },
  {
    code: 'KeyJ', en: 'j', ru: 'о', printable: true,
  },
  {
    code: 'KeyK', en: 'k', ru: 'л', printable: true,
  },
  {
    code: 'KeyL', en: 'l', ru: 'д', printable: true,
  },
  {
    code: 'Semicolon', en: ';', ru: 'ж', shift: { en: ':', ru: 'ж' }, printable: true,
  },
  {
    code: 'Quote', en: '\'', ru: 'э', shift: { en: '"', ru: 'э' }, printable: true,
  },
  {
    code: 'Enter', en: 'Enter', ru: 'Enter', printable: false,
  },
  {
    code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false,
  },
  {
    code: 'KeyZ', en: 'z', ru: 'я', printable: true,
  },
  {
    code: 'KeyX', en: 'x', ru: 'ч', printable: true,
  },
  {
    code: 'KeyC', en: 'c', ru: 'с', printable: true,
  },
  {
    code: 'KeyV', en: 'v', ru: 'м', printable: true,
  },
  {
    code: 'KeyB', en: 'b', ru: 'и', printable: true,
  },
  {
    code: 'KeyN', en: 'n', ru: 'т', printable: true,
  },
  {
    code: 'KeyM', en: 'm', ru: 'ь', printable: true,
  },
  {
    code: 'Comma', en: ',', ru: 'б', shift: { en: '<', ru: 'б' }, printable: true,
  },
  {
    code: 'Period', en: '.', ru: 'ю', shift: { en: '>', ru: 'ю' }, printable: true,
  },
  {
    code: 'Slash', en: '/', ru: '.', shift: { en: '?', ru: ',' }, printable: true,
  },
  {
    code: 'ArrowUp', en: '▲', ru: '▲', printable: false,
  },
  {
    code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false,
  },
  {
    code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false,
  },
  {
    code: 'MetaLeft', en: '', ru: '', printable: false,
  },
  {
    code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false,
  },
  {
    code: 'Space', en: ' ', ru: ' ', printable: true,
  },
  {
    code: 'AltRight',
    en: 'Alt',

    ru: 'Alt',
    printable: false,
  },
  {
    code: 'ArrowLeft', en: '◄', ru: '◄', printable: false,
  },
  {
    code: 'ArrowDown', en: '▼', ru: '▼', printable: false,
  },
  {
    code: 'ArrowRight', en: '►', ru: '►', printable: false,
  },
  {
    code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false,
  },
];


class Keyboard {
elements = {
  wrapper: null,
  input: null,
  keyboard: null,
  info: null,
  keys: [],
}

yaziks = localStorage.getItem('yaziks') || 'en';

isCapsLock = false;

isShift = false;


init() {
  this.elements.wrapper = createElement('div', 'wrapper');
  this.elements.input = document.getElementById('search');
  this.elements.keyboard = createElement('div', 'keyboard');
  this.elements.info = createElement('p', 'info');

  this.elements.info.innerHTML = 'Переключение раскладки: ALT+SHIFT, отправка запроса: Enter';

  this.elements.keyboard.append(createKeys());
  this.elements.keys = this.elements.keyboard.querySelectorAll('.key');
  this.fillButtonsNames();


  this.elements.wrapper.append(this.elements.keyboard, this.elements.info);

  document.body.append(this.elements.wrapper);

  document.addEventListener('keydown', this.onKeyDown);
  document.addEventListener('keyup', this.onKeyUp);
  document.addEventListener('click', this.onClick);
}

fillButtonsNames() {
  this.elements.keys.forEach((key, index) => {
    key.textContent = buttons[index][this.yaziks];

    if (!this.isCapsLock && this.isShift) {
      if (buttons[index].shift) {
        key.textContent = buttons[index].shift[this.yaziks].toUpperCase();
      } else if (buttons[index].printable) {
        key.textContent = buttons[index][this.yaziks].toUpperCase();
      }
    } else if (this.isCapsLock && !this.isShift) {
      if (buttons[index].printable) {
        key.textContent = buttons[index][this.yaziks].toUpperCase();
      }
    } else if (this.isCapsLock && this.isShift) {
      if (buttons[index].shift) {
        key.textContent = buttons[index].shift[this.yaziks].toLowerCase();
      } else if (buttons[index].printable) {
        key.textContent = buttons[index][this.yaziks].toLowerCase();
      }
    }
  });
}

onClick = (event) => {
  if (event.target.classList.contains('key')) {
    const index = Array.from(this.elements.keys).findIndex((key) => key === event.target);
    this.onButtonAction(buttons[index]);
  }
}

onButtonAction(button) {
  if (button.printable) {
    this.printLetter(button);
    return;
  }

  switch (button.code) {
    case 'Enter':
      ShowSelection();
      break;
    case 'Tab':
      this.onTab();
      break;
    case 'Backspace':
      this.onBackspace();
      break;
    case 'Delete':
      this.onDelete();
      break;
    case 'CapsLock':
      this.onCapsLock();
      break;
    case 'ArrowRight':
      this.onArrowRight();
      break;
    case 'ArrowLeft':
      this.onArrowLeft();
      break;
    case 'MetaLeft':
      this.onMetaLeft();
      break;
    default:
      break;
  }
}

printLetter(button) {
  const { value, selectionStart } = this.elements.input;
  const index = buttons.indexOf(button);
  const letter = this.elements.keys[index].textContent;
  this.elements.input.value = value.slice(0, selectionStart)
+ letter + value.slice(selectionStart);
  this.setCursorPosition(selectionStart + 1);
}

onTab() {
  const { value, selectionStart } = this.elements.input;
  this.elements.input.value = `${value.slice(0, selectionStart)}\t${value.slice(selectionStart)}`;
  this.setCursorPosition(selectionStart + 1);
}

onBackspace() {
  const { value, selectionStart } = this.elements.input;
  const newSelectionStart = selectionStart > 0 ? selectionStart - 1 : 0;
  this.elements.input.value = value.slice(0, newSelectionStart) + value.slice(selectionStart);
  this.setCursorPosition(newSelectionStart);
}

onDelete() {
  const { value, selectionStart } = this.elements.input;
  this.elements.input.value = value.slice(0, selectionStart) + value.slice(selectionStart + 1);
  this.setCursorPosition(selectionStart);
}

onCapsLock() {
  this.isCapsLock = !this.isCapsLock;
  this.fillButtonsNames();
}

onArrowRight() {
  const { value, selectionStart } = this.elements.input;
  this.setCursorPosition(selectionStart + 1);
}

onArrowLeft() {
  const { value, selectionStart } = this.elements.input;
  this.setCursorPosition(selectionStart - 1);
}

onMetaLeft() {
  this.changeLanguage();
}

onKeyDown=(event) => {
  event.preventDefault();
  const index = buttons.findIndex((button) => button.code === event.code);

  if (index === -1) return;

  const buttonDown = this.elements.keys[index];

  buttonDown.classList.add('pressed');
  this.elements.keys[index].click();

  if ((event.shiftKey && event.altKey) || (event.shiftKey && event.ctrlKey)) {
    this.changeLanguage();
  }


  if (event.metaKey) {
    this.changeLanguage();
  }

  if (event.shiftKey && !event.altKey) {
    this.isShift = true;
    this.fillButtonsNames();
  }
}

onKeyUp=(event) => {
  const index = buttons.findIndex((button) => button.code === event.code);

  if (index === -1) return;

  const buttonPressed = this.elements.keys[index];

  buttonPressed.classList.remove('pressed');
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && this.isShift) {
    this.isShift = false;
    this.fillButtonsNames();
  }
}

changeLanguage() {
  this.yaziks = this.yaziks === 'en' ? 'ru' : 'en';
  localStorage.setItem('yaziks', this.yaziks);
  this.fillButtonsNames();
}


setCursorPosition(position) {
  this.elements.input.selectionStart = position;
  this.elements.input.selectionEnd = position;
  this.elements.input.focus();
}
}

function createElement(tagName, ...classNames) {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  return element;
}

function createKeys() {
  const keysFragment = new DocumentFragment();

  buttons.forEach((button) => {
    const key = createElement('button', 'key');
    key.setAttribute('type', 'button');

    switch (button.code) {
      case 'Backspace':
        key.classList.add('backspace');
        break;
      case 'Tab':
        key.classList.add('tab');
        break;
      case 'Delete':
        key.classList.add('delete');
        break;
      case 'CapsLock':
        key.classList.add('capslock');
        break;
      case 'Enter':
        key.classList.add('enter');
        break;
      case 'ShiftLeft':
        key.classList.add('shift');
        break;
      case 'ShiftRight':
        key.classList.add('shift');
        break;
      case 'ControlRight':
        key.classList.add('ctrl');
        break;
      case 'Space':
        key.classList.add('space');
        break;
      case 'MetaLeft':
        key.classList.add('MetaLeft');
        break;
      default:
        break;
    }
    keysFragment.append(key);
  });
  return keysFragment;
}

window.addEventListener('load', () => {
  const keyboard = new Keyboard();
  const element = document.createElement('div');
  element.classList.add('wrapper');
  keyboard.init();
});
