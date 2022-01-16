const modal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const callBtn = document.querySelectorAll('.callback-btn'); //
  const openModal = document.getElementById('callback');

  callBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      e.preventDefault();
      modalOverlay.style.display = 'flex';
      openModal.style.display = 'flex';
    });
  });
};

export default modal;
