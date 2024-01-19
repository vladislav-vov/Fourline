window.addEventListener('DOMContentLoaded', () => {
	const bodyLockToggle = () => {
		if (!document.documentElement.classList.contains('lock')) {
			document.documentElement.classList.add('lock');
		} else {
			document.documentElement.classList.remove('lock');
		}
	};

	function menuInit() {
		if (document.querySelector('.icon-menu')) {
			document.addEventListener('click', function (e) {
				if (e.target.closest('.icon-menu')) {
					bodyLockToggle();
					document.documentElement.classList.toggle('menu-open');
				}
			});
		}
	}

	menuInit();

	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		},
	};

	if (isMobile.any()) {
		document.body.classList.add('touch');

		const triggers = document.querySelectorAll('.sub-menu__trigger');

		triggers.forEach((trigger) => {
			const subMenu = trigger.closest('.sub-menu');

			trigger.addEventListener('click', () => {
				subMenu.classList.toggle('open');
				trigger.classList.toggle('active');
			});
		});
	} else {
		document.body.classList.add('mouse');
	}

	document.addEventListener('click', (e) => {
		const triggers = document.querySelectorAll('.sub-menu__trigger');

		if (!e.target.closest('.sub-menu')) {
			triggers.forEach((trigger) => {
				const subMenu = trigger.closest('.sub-menu');
				subMenu.classList.remove('open');
				trigger.classList.remove('active');
			});
		}
	});
});
