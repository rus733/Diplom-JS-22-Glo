'use strict';
const scrollTabs = () => {
  //console.log('HI');
  const buttonsMenu = document.querySelectorAll("a[href^='#']");
  buttonsMenu.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};
export default scrollTabs;
