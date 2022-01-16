'use strict';

const accordion = () => {
  let accordion = document.querySelectorAll('.accordeon>.element'),
    elementContent = document.querySelectorAll('.acc-section'),
    i;

  for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
      hideAll();

      this.classList.toggle('active');
      let blocks = this.children;
      Array.from(blocks).forEach((em) => {
        em.classList.toggle('faq');
      });
    };
  }

  function hideAll() {
    for (i = 0; i < accordion.length; i++) {
      accordion[i].classList.toggle('active', false);
      elementContent[i].classList.toggle('faq', false);
    }
  }
};

export default accordion;
