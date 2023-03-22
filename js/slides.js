const sliderContainer = document.getElementById("slider-container");
const distance = sliderContainer.clientWidth;
const sliderItems = document.getElementById("slides");
const slides = document.getElementsByClassName("slide");
const slidesLength = slides.length;
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const productThumbs = Array.from(document.querySelectorAll("#product-thumbs img"));

const firstSlide = slides[0];
const lastSlide = slides[slidesLength - 1];
const cloneFirst = firstSlide.cloneNode(true);
const cloneLast = lastSlide.cloneNode(true);

let index = 0;
let allowShift = true;
let posInitial;
let posFinal;

sliderItems.appendChild(cloneFirst);
sliderItems.insertBefore(cloneLast, firstSlide);

function shiftSlide(direction) {
	sliderItems.classList.add("shifting");

	if (allowShift) {
		posInitial = sliderItems.offsetLeft;

		if (direction === 1) {
			sliderItems.style.left = `${posInitial - distance}px`;
			index++;
		} else if (direction === -1) {
			sliderItems.style.left = `${posInitial + distance}px`;
			index--;
		}
	}

	allowShift = false;
}

function shiftSlideThumbs(position) {
	sliderItems.classList.add("shifting");
	sliderItems.style.left = `-${(position + 1) * distance}px`;
	allowShift = false;
}

function checkIndex() {
	sliderItems.classList.remove("shifting");

	if (index === -1) {
		sliderItems.style.left = `-${slidesLength * distance}px`;
		index = slidesLength - 1;
	}

	if (index === slidesLength) {
		sliderItems.style.left = `-${1 * distance}px`;
		index = 0;
	}

	allowShift = true;
}

nextBtn.addEventListener("click", (event) => {
	shiftSlide(1);
});

prevBtn.addEventListener("click", (event) => {
	shiftSlide(-1);
});

sliderItems.addEventListener("transitionend", checkIndex);

productThumbs.forEach((thumb) => {
	thumb.addEventListener("click", (event) => {
		const positionNum = parseInt(event.target.dataset.position - 1);
		shiftSlideThumbs(positionNum);
	});
});
