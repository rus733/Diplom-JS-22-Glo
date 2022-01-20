'use strict';

const scrollTabs = () => {
  const buttonsMenu = document.querySelectorAll("a[href^='#']");
  buttonsMenu.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};
export default scrollTabs;
