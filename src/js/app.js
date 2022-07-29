import * as prjFunctions from "./modules/function.js";
import Typed from 'typed.js';

prjFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper1 = new Swiper('.swiper', {
	modules: [Navigation, Pagination],

	// loop: true,
	// autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 0,


	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


// -------------------------------------------------------

// const burgerMain = document.querySelector('.firm-burger');
// const burgerBtnBody = burgerMain.querySelector('.firm-burger__button');

// burgerBtnBody.addEventListener('click', evt => {

// 	burgerMain.classList.toggle('firm-burger_open');

// 	burgerMain.classList.add('firm-burger_anim');
// 	setTimeout(() => burgerMain.classList.remove('firm-burger_anim'), 1000);

// 	setTimeout(() => burgerMain.classList.toggle('firm-burger_png'), 750);
// })

const greetingSearchAnim = () => {
	setTimeout(() =>
		greeting.classList.add('greeting_anim'),
		300
	)
}

const greetingSearchDone = () => {
	setTimeout(() =>
		[
			greeting.classList.add('greeting_done')
		],
		4500
	)
}

const greeting = document.querySelector('.greeting')

const options = {
	strings: [
		'|',
		'|',
		'вёрстка, посадка на WordPress',
		'вёрстка, посадка на WordPress /',
		'вёрстка, посадка на WordPress |',
		'вёрстка, посадка на WordPress /'
	],
	// smartBackspace: false,
	typeSpeed: 50,
	startDelay: 0,
	backDelay: 50,
	backSpeed: 20,
	onComplete: (self) => {
		[greetingSearchAnim(), greetingSearchDone()]
	}

	// onComplete: (self) => { [, ] }
	// typeSpeed: 0, // Скорость печати
	//  backSpeed: 0, // Скорость удаления
	//  startDelay: 0, // Задержка перед стартом анимации
	//  backDelay: 500, // Пауза перед удалением 
	//  loop: false, // Повтор (true или false)
	//  loopCount: false, // Число повторов, false = бесконечно
	//  showCursor: true, // Отображение курсора
	//  attr: null, // Атрибут
	//  callback: function(){ } // Функция вызываемая после окончания работы плагина
};

const typed = new Typed('.google__input', options);







