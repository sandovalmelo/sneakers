const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu-nav");
const navList = document.getElementById("nav-list");
const menuIconImg = document.querySelector("#menu-icon img");

const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const productQuantity = document.getElementById("quantity");
let quantity = 1;

const addToCartBtn = document.getElementById("add-to-cart");
const cartItems = document.getElementById("cart-itens");
const cartContainer = document.getElementById("cart-container");
const cartDetails = document.getElementById("cart-details");
const menuCart = document.getElementById("menu-cart");
const deleteIcon = document.getElementById("delete-icon");

const cartQuantity = document.getElementById("cart-quantity");
const cartTotal = document.getElementById("cart-total");

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

addToCartBtn.addEventListener("click", (event) => {
	cartDetails.classList.remove("empty");
	cartItems.classList.add("active");
	cartItems.innerText = quantity;
	cartQuantity.innerText = quantity;
	cartTotal.innerText = `$ ${quantity * 125}.00`;

	if (quantity === 0) {
		cartItems.classList.remove("active");
		cartDetails.classList.toggle("empty");
		cartItems.classList.remove("active");
	}
});

menuCart.addEventListener("click", (event) => {
	cartContainer.classList.toggle("active");
});

deleteIcon.addEventListener("click", (event) => {
	cartDetails.classList.toggle("empty");
	cartItems.classList.remove("active");
});
