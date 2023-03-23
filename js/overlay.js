const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("close-overlay");

closeOverlay.addEventListener("click", (event) => {
	overlay.setAttribute("data-open", "false");
});

sliderItems.addEventListener("click", (event) => {
	if (window.innerWidth > 899) {
		overlay.setAttribute("data-open", "true");
	}
});

overlay.addEventListener("click", (event) => {
	if (!event.target.closest(".overlay-container")) {
		overlay.setAttribute("data-open", "false");
	}
});
