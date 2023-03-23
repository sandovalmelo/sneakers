const sliderContainer = document.getElementById("slider-container");
let distance = sliderContainer.clientWidth;
const sliderItems = document.getElementById("slides");
const slides = document.getElementsByClassName("slide");
const slidesLength = slides.length;
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const productThumbs = document.getElementById("product-thumbs");

const firstSlide = slides[0];
const lastSlide = slides[slidesLength - 1];
const cloneFirst = firstSlide.cloneNode(true);
const cloneLast = lastSlide.cloneNode(true);

let index = 0;
let allowShift = true;
let posInitial;

sliderItems.appendChild(cloneFirst);
sliderItems.insertBefore(cloneLast, firstSlide);
sliderItems.style.left = `-${sliderContainer.clientWidth}px`;

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

productThumbs.addEventListener("click", (event) => {
	const position = event.target.dataset.position;
	const index = position - 1;
	const images = Array.from(productThumbs.children);

	shiftSlideThumbs(index);

	images.forEach((image, imageIndex) => {
		if (imageIndex === index) {
			image.setAttribute("data-active", "true");
		} else {
			image.setAttribute("data-active", "false");
		}
	});
});

window.addEventListener("resize", () => {
	distance = sliderContainer.clientWidth;
	sliderItems.style.left = `-${(index + 1) * sliderContainer.clientWidth}px`;
});
