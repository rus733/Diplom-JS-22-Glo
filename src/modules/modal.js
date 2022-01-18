'use strict';

import { blockBody, unBlockBody } from './helpers';

const modal = () => {
  const modalOpen = document.getElementById('callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    callBtn = document.querySelectorAll('.callback-btn'),
    findService = document.querySelector('.button-services'),
    carouselElem = document.querySelectorAll('.absolute');

  callBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOpen.style.display = 'flex';
      modalOverlay.style.display = 'flex';
      blockBody();
    });
  });
  //
  findService.addEventListener('click', (e) => {
    e.preventDefault();
    modalOpen.style.display = 'flex';
    modalOverlay.style.display = 'flex';
    blockBody();
  });

  carouselElem.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault(); //
      modalOpen.style.display = 'flex';
      modalOverlay.style.display = 'flex';
      blockBody();
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
      modalOpen.style.display = 'none';
      modalOverlay.style.display = 'none';
      unBlockBody();
    }
  });
};

export default modal;
