const fullscreen = document.getElementById("fullscreen");
const closeFullscreen = document.getElementById("close-fullscreen");

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
