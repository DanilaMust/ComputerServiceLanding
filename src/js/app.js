import {smoothScroll} from './modules/smoothScroll.js';
import {headerLink} from './modules/headerLink.js';
import {headerBurger} from './modules/headerBurger.js';


import {servicesList}from './modules/servicesList.js';
import {cooperationSlider} from './modules/cooperationSlider.js';


document.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
    headerLink();
    headerBurger();
    servicesList();
    cooperationSlider();
//  slider();
});


// import {smoothScroll} from './modules/smoothScroll.js';
// import {headerLink} from './modules/headerLink.js';
// import {headerBurger} from './modules/headerBurger.js';
// import {popup} from './modules/popup.js';
// import {slider} from './modules/slider.js';

// document.addEventListener("DOMContentLoaded", () => {
//   smoothScroll();
//   headerLink();
//   headerBurger();
//   popup();
//   slider();
// });

