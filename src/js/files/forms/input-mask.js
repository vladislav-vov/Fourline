import 'inputmask/dist/inputmask.min.js';

window.addEventListener('DOMContentLoaded', () => {
	const phoneInputs = document.querySelectorAll('input[type=tel]');

	if (phoneInputs.length) {
		Inputmask({ mask: '+380 (999) 999-99-99' }).mask(phoneInputs);
	}
});
