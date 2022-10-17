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
		selectList.classList.toggle('hidden');
		selectList.classList.toggle('show');
		selectHead.classList.toggle('open');
	});
});


rangeItem.addEventListener('mousemove', rangeChange);
rangeItem.addEventListener('click', rangeChange);

function rangeChange() {
	document.getElementById('textInput').textContent = rangeItem.value;
};


formaFile.addEventListener('change', () => {
	// document.querySelector('.forma__fileText').textContent = formaFile.value;
	const fileNameArr = formaFile.value.split("\\");
	const fileName = fileNameArr[fileNameArr.length - 1];
	document.querySelector('.forma__fileText').textContent = fileName;
	formaFileImg.src = 'icons/check.png';
});

