'use strict';
const modal = () => {
  //console.log('привет');
  const modalOverlay = document.querySelector('.modal-overlay');
  const callBtn = document.querySelectorAll('.callback-btn'); //
  const openModal = document.getElementById('callback');
  //console.log(openModal);

  callBtn.forEach((btn) => {
    //console.log(btn);
    btn.addEventListener('click', () => {
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
