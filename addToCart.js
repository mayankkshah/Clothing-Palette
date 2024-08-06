import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addToCart = (event, id, stock) => {

  let arrLocalStorageProduct = getCartProductFromLS();
  // console.log('Add to cart button clicked');
  const currProductElem = document.querySelector(`#card${id}`);
  // console.log(currProductElem);
  let quantity = currProductElem.querySelector('.productQuantity').innerText;
  let price = currProductElem.querySelector('.productPrice').innerText;
  // console.log(quantity, price);
  price = price.replace('₹', '');

  let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
    showToast("add", id);
  }


  if (existingProd) {
    // alert('Product already in cart');
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  showToast('add', id);
} 