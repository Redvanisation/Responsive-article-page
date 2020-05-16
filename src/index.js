import './styles/main.scss';

const modal = document.querySelector('#modal');
const modalCloseX = document.querySelector('#modal-close-x');
const modalBox = document.querySelector('#modal-box');
const label = document.querySelector('#modal-box-label');
const btn = document.querySelector('#modal-box-btn');

const hideModal = (e) => {
  if (e.target === modal || e.target === modalCloseX) {
    modal.classList.add('hidden');
  }
}


modal.addEventListener('click', (e) => hideModal(e))
