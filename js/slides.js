const sliderContainer = document.getElementById("slider-container");
const sliderItems = document.getElementById("slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const productThumbs = document.getElementById("product-thumbs");

const slide = (container, items, prev, next, thumbs, resize) => {
	const slides = items.getElementsByClassName("slide");
	const slidesLength = slides.length;
	const firstSlide = slides[0];
	const lastSlide = slides[slidesLength - 1];
	const cloneFirst = firstSlide.cloneNode(true);
	const cloneLast = lastSlide.cloneNode(true);
	const thumbsNails = Array.from(thumbs.children);
	let distance = container.clientWidth || sliderContainer.clientWidth;

	let index = 0;
	let allowShift = true;
	let posInitial;

	items.appendChild(cloneFirst);
	items.insertBefore(cloneLast, firstSlide);
	items.style.left = `-${distance}px`;

	function shiftSlide(direction) {
		items.classList.add("shifting");

		if (allowShift) {
			posInitial = items.offsetLeft;

			if (direction === 1) {
				items.style.left = `${posInitial - distance}px`;
				index++;
			} else if (direction === -1) {
				items.style.left = `${posInitial + distance}px`;
				index--;
			}
		}

		thumbsNails.forEach((thumb, thumbIndex) => {
			thumb.setAttribute("data-active", "false");
			if (index === thumbIndex) {
				thumb.setAttribute("data-active", "true");
			}
		});

		allowShift = false;
	}

	function shiftSlideThumbs(position) {
		items.classList.add("shifting");
		items.style.left = `-${(position + 1) * distance}px`;
		allowShift = false;
		index = position;
	}

	function checkIndex() {
		items.classList.remove("shifting");

		if (index === -1) {
			items.style.left = `-${slidesLength * distance}px`;
			index = slidesLength - 1;
			thumbsNails[index].setAttribute("data-active", "true");
		}

		if (index === slidesLength) {
			items.style.left = `-${1 * distance}px`;
			index = 0;
			thumbsNails[index].setAttribute("data-active", "true");
		}
		allowShift = true;
	}

	next.addEventListener("click", (event) => {
		shiftSlide(1);
	});

	prev.addEventListener("click", (event) => {
		shiftSlide(-1);
	});

	items.addEventListener("transitionend", checkIndex);

	thumbs.addEventListener("click", (event) => {
		const position = parseInt(event.target.parentElement.dataset.position);
		const index = position - 1;

		shiftSlideThumbs(index);

		thumbsNails.forEach((image, imageIndex) => {
			if (imageIndex === index) {
				image.setAttribute("data-active", "true");
			} else {
				image.setAttribute("data-active", "false");
			}
		});
	});

	if (resize) {
		window.addEventListener("resize", () => {
			distance = container.clientWidth || sliderContainer.clientWidth;
			sliderItems.style.left = `-${(index + 1) * distance}px`;
		});
	}
};

slide(sliderContainer, sliderItems, prevBtn, nextBtn, productThumbs, true);
