const fullscreen = document.getElementById("fullscreen");
const closeFullscreen = document.getElementById("close-fullscreen");

const fullscreenWrarpper = document.getElementById("fullscreen-wrarpper");
const fullscreenSlides = document.getElementById("fullscreen-slides");
const nextBtnFullscreen = document.getElementById("next-btn-fullscreen");
const prevBtnFullscreen = document.getElementById("prev-btn-fullscreen");
const fullscreenThumbs = document.getElementById("fullscreen-thumbs");

closeFullscreen.addEventListener("click", (event) => {
	fullscreen.setAttribute("data-open", "false");
});

sliderItems.addEventListener("click", (event) => {
	if (window.innerWidth > 899) {
		fullscreen.setAttribute("data-open", "true");
	}
});

fullscreen.addEventListener("click", (event) => {
	if (!event.target.closest(".fullscreen-container")) {
		fullscreen.setAttribute("data-open", "false");
	}
});

slide(
	fullscreenWrarpper,
	fullscreenSlides,
	prevBtnFullscreen,
	nextBtnFullscreen,
	fullscreenThumbs,
	false
);

window.addEventListener("resize", (event) => {
	if (window.innerWidth < 900) {
		fullscreen.setAttribute("data-open", "false");
	}
});
