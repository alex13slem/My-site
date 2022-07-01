import * as prjFunctions from "./modules/function.js";

prjFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper1 = new Swiper('.swiper1', {
	modules: [Navigation, Pagination],

	// loop: true,
	// autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 32,
	breakpoints: {
		1361: {
			slidesPerView: 4,
		},
		1111: {
			slidesPerView: 3,
		},
		822: {
			slidesPerView: 2,
		},
		787: {
			slidesPerView: 3,
		},
		538: {
			slidesPerView: 2,
		},
	},

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
});


// -------------------------------------------------------

const burgerMain = document.querySelector('.firm-burger');
const burgerBtnBody = burgerMain.querySelector('.firm-burger__button');

burgerBtnBody.addEventListener('click', evt => {

	burgerMain.classList.toggle('firm-burger_open');

	burgerMain.classList.add('firm-burger_anim');
	setTimeout(() => burgerMain.classList.remove('firm-burger_anim'), 1000);

	setTimeout(() => burgerMain.classList.toggle('firm-burger_png'), 750);
})