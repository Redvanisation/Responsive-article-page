// Importing the styles to be bundeled with webpack in main.js
import './styles/main.scss';

// Selecting the needed nodes
const modal = document.querySelector('#modal');
const modalCloseX = document.querySelector('#modal-close-x');
const input = document.querySelector('#modal-input');
const label = document.querySelector('#modal-box-label');
const btn = document.querySelector('#modal-box-btn');


// Function to hide the modal after a click
const hideModal = (e) => {
  if (e.target === modal || e.target === modalCloseX) {
    modal.classList.add('hidden');
  }
}

// Function to revert the input form's styles if email is correct
const handleCorrectEmail = () => {
  input.classList.remove('wrong-input');
  label.classList.remove('wrong-input');
  input.classList.remove('wrong-input__border');
  input.placeholder = 'Please enter your email here';
  label.textContent = 'Please enter your email here';
}

// Function to handle the input form's styles if email is incorrect
const handleIncorrectEmail = () => {
  input.classList.add('wrong-input');
  label.classList.add('wrong-input')
  input.classList.add('wrong-input__border');
  input.placeholder = '';
  input.focus();
  label.textContent = 'Please enter a valid email address';
}

// Function to validate the email inputed by the user and call the correct function depending on the result
const validateEmail = () => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = regex.test(String(input.value).toLocaleLowerCase());

  if (validate) {
    handleCorrectEmail();
  } else {
    handleIncorrectEmail();
  }
}

// Function to revert the input field's styles on blur if there was nothing entered by the use 
const handleInputBlur = () => {
  if (!input.value) {
    handleCorrectEmail();
  }
}

// Event listeners
modal.addEventListener('click', (e) => hideModal(e));
btn.addEventListener('click', () => validateEmail());
input.addEventListener('blur', () => handleInputBlur())
