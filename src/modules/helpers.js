const blockBody = () => {
  const body = document.body;
  body.style.overflow = 'hidden';
  const bodyScroll = calcScroll();
  body.style.marginRight = `${bodyScroll}px`;
};

const unBlockBody = () => {
  const body = document.body;
  body.style.overflow = 'auto';
  body.style.marginRight = `0`;
};

function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '500px';
  div.style.height = '500px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

export { blockBody, unBlockBody, calcScroll };
