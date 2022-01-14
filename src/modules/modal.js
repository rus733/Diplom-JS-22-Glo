const modal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const callBtn = document.querySelectorAll('.callback-btn'); //
  const openModal = document.getElementById('callback');

  callBtn.forEach((btn) => {
    //console.log(btn);
    btn.addEventListener('click', () => {
      modalOverlay.style.display = 'flex';
      openModal.style.display = 'flex';
    });
  });
};

export default modal;
