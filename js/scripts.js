const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu-nav");
const menuIconImg = document.querySelector("#menu-icon img");

menuIcon.addEventListener("click", (event) => {
	console.log(menuNav.classList.contains("active"));
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
