import Swiper from 'swiper';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', () => {
	function updateSliderState(slider, sliderSelector) {
		const { slidesPerView } = slider.params;
		const sliderEl = document.querySelector(`${sliderSelector}`);

		slider.loop =
			slider.pagination.enabled =
			slider.pagination.clickable =
				slider.slides.length > slidesPerView;
		slider.pagination.el.style.display =
			slider.slides.length > slidesPerView ? 'flex' : 'none';

		sliderEl.classList.toggle(
			'slider--pb-40',
			slider.slides.length > slidesPerView
		);
	}

	const createSlider = (selector, options) => {
		if (document.querySelector(selector)) {
			const slider = new Swiper(selector, options);

			if (options.modules && options.modules.includes(Pagination)) {
				updateSliderState(slider, selector);

				slider.on('init', () => updateSliderState(slider, selector));
				slider.on('resize', () => updateSliderState(slider, selector));
			}
		}
	};

	createSlider('.portfolio__slider', {
		modules: [Pagination, Navigation],
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		touch: true,
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

	createSlider('.services__slider', {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		touch: true,
		navigation: {
			nextEl: '.services__slider-next',
			prevEl: '.services__slider-prev',
		},
	});

	createSlider('.other__slider', {
		modules: [Pagination],
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		touch: true,
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
	});

	const productSliderSelector = '.product__slider';
	const productThumbsSelector = '.product__thumbs';

	if (
		document.querySelector(productSliderSelector) &&
		document.querySelector(productThumbsSelector)
	) {
		const sliderThumbs = new Swiper(productThumbsSelector, {
			spaceBetween: 10,
			slidesPerView: 2,
			loop: true,
			watchOverflow: true,
			touch: true,
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

		createSlider(productSliderSelector, {
			modules: [Thumbs, Navigation],
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			touch: true,
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
