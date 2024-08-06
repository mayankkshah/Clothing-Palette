import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector('.productQuantity');
  const productPrice = currentCardElement.querySelector('.productPrice');

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProduct = getCartProductFromLS();

  // Check if the product is already in the cart
  let existingProd = localCartProduct.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  // Increment the quantity
  if (event.target.className === 'cartIncrement') {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity === stock;
      localStoragePrice = price * stock;
    }
  }

  // Decrement the quantity
  if (event.target.className === 'cartDecrement') {
    if (quantity > 1) {
      quantity -= 1;
      // localStoragePrice = price * quantity;
    }
  }
  localStoragePrice = price * quantity;
  // localStoragePrice = Number(localStoragePrice.toFixed(2));

  // Update the local storage
  let updatedCart = { id, quantity, price: localStoragePrice };
  updatedCart = localCartProduct.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });
  localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));


  // Reflect the changes on the UI
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  updateCartProductTotal();

}