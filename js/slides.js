// const sliderContainer = document.getElementById("slider-container");
// const sliderItems = document.getElementById("slides");
// const slides = document.getElementsByClassName("slide");
// const slidesLength = slides.length;
// const slideSize = slides[0].offsetWidth;
// console.log(slides[0].offsetWidth);

// const firstSlide = slides[0];
// const lastSlide = slides[slidesLength - 1];
// const cloneFirst = firstSlide.cloneNode(true);
// const cloneLast = lastSlide.cloneNode(true);

// let index = 0;
// let allowShift = true;
// let posInitial;
// let posFinal;

// sliderItems.appendChild(cloneFirst);
// sliderItems.insertBefore(cloneLast, firstSlide);

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const productThumbs = Array.from(document.querySelectorAll("#product-thumbs img"));

// function shiftSlide(direction) {
// 	sliderItems.classList.add("shifting");

// 	if (allowShift) {
// 		posInitial = sliderItems.offsetLeft;

// 		if (direction === 1) {
// 			sliderItems.style.left = `${posInitial - slideSize}px`;
// 			index++;
// 		} else if (direction === -1) {
// 			sliderItems.style.left = `${posInitial + slideSize}px`;
// 			index--;
// 		}
// 	}
// }

// nextBtn.addEventListener("click", (event) => {
// 	shiftSlide(1);
// });

// prevBtn.addEventListener("click", (event) => {
// 	shiftSlide(-1);
// });

let activeSlider = 1;

nextBtn.addEventListener("click", (event) => {
	if (activeSlider < 4) {
		const distance = sliderContainer.clientWidth;
		sliderContainer.style.transform = `translateX(-${distance * activeSlider}px)`;
		sliderContainer.style.transition = "transform ease 500ms";
		activeSlider++;
	}
	console.log(activeSlider);
});

prevBtn.addEventListener("click", (event) => {
	if (activeSlider > 1) {
		const distance = sliderContainer.clientWidth;
		activeSlider--;
		const total = distance * activeSlider;
		sliderContainer.style.transform = `translateX(-${total - sliderContainer.clientWidth}px)`;
	}
	console.log(activeSlider);
});

productThumbs.forEach((thumb) => {
	thumb.addEventListener("click", (event) => {
		const distance = sliderContainer.clientWidth;
		const positionNum = parseInt(event.target.dataset.position - 1);
		sliderContainer.style.transform = `translateX(-${distance * positionNum}px)`;
		activeSlider = positionNum + 1;
	});
});
