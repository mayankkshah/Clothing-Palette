import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // Update the local storage
  localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

  // Remove the product from the cart
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {

    removeDiv.remove();
    showToast("delete", id);
    updateCartProductTotal();

  }
  updateCartValue(cartProducts);
};