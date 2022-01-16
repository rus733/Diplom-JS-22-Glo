'use strict';

import modal from './modules/modal';
import scrollTabs from './modules/scrollTabs';
import slider from './modules/slider';

modal();
scrollTabs();
slider(/*{
  sliderContent: 'top-slider',
  sliderItemClass: 'item',
  dotsContentClass: 'slider-dots',
  dotClass: 'dot',
  dotActiveClass: 'dot-active',
  slideActiveClass: 'portfolio-item-active',
  timer: 3000,
}*/);
