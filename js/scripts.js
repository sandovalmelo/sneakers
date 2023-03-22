const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu-nav");
const navList = document.getElementById("nav-list");
const menuIconImg = document.querySelector("#menu-icon img");

const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const productQuantity = document.getElementById("quantity");
let quantity = 1;

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

// const nextBtn = document.getElementById("next-btn");
// const prevBtn = document.getElementById("prev-btn");
// const productThumbs = Array.from(document.querySelectorAll("#product-thumbs img"));

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

menuNav.addEventListener("click", (event) => {
	if (!event.target.closest("#nav-list")) {
		menuNav.classList.remove("active");
		menuIconImg.setAttribute("src", "./images/icon-menu.svg");
		document.body.style.overflow = "scroll";
	}
});

menuIcon.addEventListener("click", (event) => {
	if (!menuNav.classList.contains("active")) {
		menuNav.classList.add("active");
		menuIconImg.setAttribute("src", "./images/icon-close.svg");
		document.body.style.overflow = "hidden";
	} else {
		menuNav.classList.remove("active");
		menuIconImg.setAttribute("src", "./images/icon-menu.svg");
		document.body.style.overflow = "scroll";
	}
});

plusBtn.addEventListener("click", (event) => {
	if (quantity <= 9) {
		quantity++;
		productQuantity.innerText = quantity;
	}
});

minusBtn.addEventListener("click", (event) => {
	if (quantity > 0) {
		quantity--;
		productQuantity.innerText = quantity;
	}
});

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
