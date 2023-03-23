const addToCartBtn = document.getElementById("add-to-cart");
const cartItems = document.getElementById("cart-itens");
const cartContainer = document.getElementById("cart-container");
const cartDetails = document.getElementById("cart-details");
const menuCart = document.getElementById("menu-cart");
const deleteIcon = document.getElementById("delete-icon");

const cartQuantity = document.getElementById("cart-quantity");
const cartTotal = document.getElementById("cart-total");

const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const productQuantity = document.getElementById("quantity");
let quantity = 1;

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
	menuCart.classList.toggle("open");
});

deleteIcon.addEventListener("click", (event) => {
	cartDetails.classList.toggle("empty");
	cartItems.classList.remove("active");
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
