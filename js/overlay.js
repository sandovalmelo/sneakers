const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("close-overlay");

closeOverlay.addEventListener("click", (event) => {
	overlay.style.display = "none";
});

sliderItems.addEventListener("click", (event) => {
	if (window.innerWidth > 899) {
		overlay.style.display = "flex";
	}
});
