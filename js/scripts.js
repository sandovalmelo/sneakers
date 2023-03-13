const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu-nav");
const menuIconImg = document.querySelector("#menu-icon img");

const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const productQuantity = document.getElementById("quantity");
let quantity = 1;

const addToCartBtn = document.getElementById("add-to-cart");
const cartItems = document.getElementById("cart-itens");

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

plusBtn.addEventListener("click", (event) => {
	quantity++;
	productQuantity.innerText = quantity;
});

minusBtn.addEventListener("click", (event) => {
	if (quantity > 0) {
		quantity--;
		productQuantity.innerText = quantity;
	}
});

addToCartBtn.addEventListener("click", (event) => {
	cartItems.classList.add("active");
	cartItems.innerText = quantity;

	if (quantity === 0) {
		cartItems.classList.remove("active");
	}
});
