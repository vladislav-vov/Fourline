import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import './libs/dynamicAdapt.js';

// import { isWebp } from './files/isWebp.js';
import { formFieldsInit, formSubmit } from './files/forms/forms.js';
import './files/menu.js';
import './files/slider.js';
import './files/scroll/smoothScroll.js';
import './files/forms/input-mask.js';
import './files/forms/forms.js';

import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
	// isWebp();
	formFieldsInit({ autoHeight: true });
	formSubmit();

	Fancybox.bind('[data-fancybox="gallery"]', {
		Thumbs: {
			type: 'modern',
		},
		Toolbar: {
			display: {
				left: [],
				right: ['close'],
			},
		},
	});
});
