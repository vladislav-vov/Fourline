import Swiper from 'swiper';
import {
	Navigation,
	Thumbs,
	Autoplay,
	EffectFade,
	Pagination,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

window.addEventListener('DOMContentLoaded', () => {
	function updateSliderState(slider, sliderSelector) {
		const currentSlidesPerView = slider.params.slidesPerView;
		const sliderEl = document.querySelector(`${sliderSelector}.slider`);

		if (slider.slides.length <= currentSlidesPerView) {
			slider.loop = false;
			slider.pagination.enabled = false;
			slider.pagination.clickable = false;
			slider.pagination.el.style.display = 'none';
			sliderEl.classList.remove('slider--pb-40');
			sliderEl.classList.add('slider--pb-0');
		} else {
			slider.pagination.el.style.display = 'flex';
			sliderEl.classList.remove('slider--pb-0');
			sliderEl.classList.add('slider--pb-40');
		}
	}

	if (document.querySelector('.portfolio__slider')) {
		new Swiper('.portfolio__slider', {
			modules: [Pagination, Navigation],
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.portfolio__slider-pagination',
				enabled: true,
				clickable: true,
			},
			navigation: {
				nextEl: '.portfolio__slider-next',
				prevEl: '.portfolio__slider-prev',
			},
			breakpoints: {
				768: {
					spaceBetween: 25,
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
			},
		});
	}

	if (document.querySelector('.services__slider')) {
		new Swiper('.services__slider', {
			modules: [Navigation],
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: '.services__slider-next',
				prevEl: '.services__slider-prev',
			},
		});
	}

	if (document.querySelector('.slider')) {
		new Swiper('.slider', {
			modules: [Pagination],
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.slider__pagination',
				enabled: true,
				clickable: true,
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
				},
			},
			on: {
				init: function (slider) {
					updateSliderState(slider, '.slider');
				},
				resize: function (slider) {
					updateSliderState(slider, '.slider');
				},
			},
		});
	}

	if (
		document.querySelector('.product__slider') &&
		document.querySelector('.product__thumbs')
	) {
		const sliderThumbs = new Swiper('.product__thumbs', {
			spaceBetween: 10,
			slidesPerView: 2,
			loop: true,
			watchOverflow: true,
			breakpoints: {
				600: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
				},
			},
		});

		new Swiper('.product__slider', {
			modules: [Thumbs, Navigation],
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			thumbs: {
				swiper: sliderThumbs,
			},
			navigation: {
				nextEl: '.product__slider-next',
				prevEl: '.product__slider-prev',
			},
		});
	}
});
