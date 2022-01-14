'use strict';
const scrollTabs = () => {
  console.log('HI');

  const buttonsMenu = document.querySelectorAll("a[href^='#']");

  buttonsMenu.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  //btn.getAttribute('href');
  /*
  let count = 1;
  buttonsMenu.forEach((btn) => {
    btn.getAttribute('href');
    console.log(`${count} ${btn.getAttribute('href')}`);
    console.log(buttonsMenu);
    console.log('*******************');
    count++;
  });
  */
};
export default scrollTabs;
