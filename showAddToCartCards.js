import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProductFromCart } from "./removeProductFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curCartProd) => curCartProd.id === curProd.id && curCartProd.quantity > 0);
});

console.log(filterProducts);

const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productQuantity').textContent = lSActualData.quantity;
    productClone.querySelector('.productPrice').textContent = lSActualData.price;

    productClone.querySelector('.stockElement').addEventListener('click', (event) => {
      incrementDecrement(event, id, stock, price);
    })

    productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => removeProductFromCart(id));
    cartElement.appendChild(productClone);

  })
}


showCartProduct();
updateCartProductTotal();