window.addEventListener('DOMContentLoaded', () => {
	const triggerElements = document.querySelectorAll('[data-go]');

	if (triggerElements.length > 0) {
		triggerElements.forEach((triggerElement) => {
			triggerElement.addEventListener('click', (e) => {
				e.preventDefault();

				const targetSelector = triggerElement.dataset.go;
				const targetBlockElement = document.querySelector(targetSelector);

				if (targetBlockElement) {
					let targetBlockElementPosition =
						targetBlockElement.getBoundingClientRect().top +
						window.scrollY -
						60;

					window.scrollTo({
						top: targetBlockElementPosition,
						behavior: 'smooth',
					});
				}
			});
		});
	}
});
