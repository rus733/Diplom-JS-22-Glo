'use strict';

const scrollUp = () => {
  const arrowUp = document.querySelector('.up'),
    servicesSection = document.querySelector('.services-section'),
    sectionTop = servicesSection.offsetTop;

  arrowUp.style.display = 'none';

  window.onscroll = function () {
    if (window.pageYOffset >= sectionTop) {
      arrowUp.style.display = 'block';
    } else {
      arrowUp.style.display = 'none';
    }
  };

  arrowUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export default scrollUp;
