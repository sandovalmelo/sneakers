const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu-nav");
const navList = document.getElementById("nav-list");
const menuIconImg = document.querySelector("#menu-icon img");

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
