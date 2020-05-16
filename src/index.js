import './styles/main.scss';

const modal = document.querySelector('#modal');
const modalCloseX = document.querySelector('#modal-close-x');
const modalBox = document.querySelector('#modal-box');
const input = document.querySelector('#modal-input');
const label = document.querySelector('#modal-box-label');
const btn = document.querySelector('#modal-box-btn');

const hideModal = (e) => {
  if (e.target === modal || e.target === modalCloseX) {
    modal.classList.add('hidden');
  }
}

const handleCorrectEmail = () => {
  input.classList.remove('wrong-input');
  label.classList.remove('wrong-input');
  input.classList.remove('wrong-input__border');
  input.placeholder = 'Please enter your email here';
  label.textContent = 'Please enter your email here';
}

const handleIncorrectEmail = () => {
  input.classList.add('wrong-input');
  label.classList.add('wrong-input')
  input.classList.add('wrong-input__border');
  input.placeholder = '';
  input.focus();
  label.textContent = 'Please enter a valid email address';
}

const validateEmail = () => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = regex.test(String(input.value).toLocaleLowerCase());

  if (validate) {
    handleCorrectEmail();
  } else {
    handleIncorrectEmail();
  }
}

const handleInputBlur = () => {
  if (!input.value) {
    handleCorrectEmail();
  }
}


modal.addEventListener('click', (e) => hideModal(e));
btn.addEventListener('click', () => validateEmail());
input.addEventListener('blur', () => handleInputBlur())
