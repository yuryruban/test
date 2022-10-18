document.addEventListener('DOMContentLoaded', () => {
	const selectHead = document.querySelector('.select__head');
	const selectList = document.querySelector('.select__list');
	const selectInput = document.querySelector('.select__input');
	const selectItems = document.querySelectorAll('.select__item');
	const rangeItem = document.querySelector('.forma__range-item');
	const formaFile = document.querySelector('.forma__file');
	const formaFileImg = document.querySelector('.forma__fileImg');
	const hamburger = document.querySelector('.hamburger');
	const headerMenu = document.querySelector('.header__menu');

	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
		headerMenu.classList.toggle("header__menu_show");
	});


	selectHead.addEventListener('click', () => {
		selectHead.classList.toggle('open');
		selectList.classList.toggle('show');
	});

	selectItems.forEach(item => {
		item.addEventListener('click', () => {
			let text = item.textContent;
			selectInput.value = text;
			selectHead.textContent = text;
			selectList.classList.toggle('show');
			selectHead.classList.toggle('open');
		});
	});

	function rangeChange() {
		document.getElementById('textInput').textContent = rangeItem.value;
	};

	rangeItem.addEventListener('mousemove', rangeChange);
	rangeItem.addEventListener('click', rangeChange);
	rangeItem.addEventListener('touchmove', rangeChange);
	rangeItem.addEventListener('touchend', rangeChange);

	formaFile.addEventListener('change', () => {
		const fileNameArr = formaFile.value.split("\\");
		const fileName = fileNameArr[fileNameArr.length - 1];
		document.querySelector('.forma__fileText').textContent = fileName;
		formaFileImg.src = 'icons/check.png';
	});


	document.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.closest('.header__menu') && !target.closest('.hamburger')) {
			headerMenu.classList.remove('header__menu_show');
			hamburger.classList.remove('is-active');
		}
		if (!target.closest('.select__head') && !target.closest('.select__list')) {
			selectHead.classList.remove('open');
			selectList.classList.remove('show');
		}
	});
})