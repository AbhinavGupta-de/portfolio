const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
	// * It is going to add 'active-btn' class to the active button!
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', () => {
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].classList = currentBtn[0].className.replace(
				' active-btn',
				''
			);
			sectBtn[i].className += ' active-btn';
		});
	}

	// * It is going to add a class 'active' to the active slide or page!
	allSections.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		//console.log(id); //For Testing Purpose Only!

		if (id) {
			const prevSection = document.querySelector('.active');
			//console.log(prevSection); //For Testing Purpose only
			prevSection.classList.remove('active');

			const currentSection = document.querySelector('#' + id);
			currentSection.classList.add('active');
		}

		// ! Test set up, it didn't work!
		// if (id) {
		// 	sectBtns.forEach((btn) => {
		// 		for (let i = 0; i < sectBtn.length; i++) {
		// 			btn.classList.remove('active');
		// 		}
		// 	});
		// 	e.target.classList.add('active');

		// 	section.forEach((section) => {
		// 		section.classList.remove('active');
		// 	});
		// }
	});

	const themeBtn = document.querySelector('.theme-btn');
	themeBtn.addEventListener('click', () => {
		let element = document.body;
		element.classList.toggle('light-mode');
	});
}

PageTransitions();
