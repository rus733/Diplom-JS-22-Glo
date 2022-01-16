'use strict';

const modal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const callBtn = document.querySelectorAll('.callback-btn'); //
  const openModal = document.getElementById('callback');

  callBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.style.display = 'flex';
      openModal.style.display = 'flex';
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {
      modalOverlay.style.display = 'none';
      openModal.style.display = 'none';
    }
  });
};

export default modal;
