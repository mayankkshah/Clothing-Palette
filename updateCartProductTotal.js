import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal = () => {

  let productSubTotal = document.querySelector('.productSubTotal');
  let productFinalTotal = document.querySelector('.productFinalTotal');
  let initialValue = 0;
  let localCartProduct = getCartProductFromLS();
  let totalProductPrice = localCartProduct.reduce((acc, curProd) => {
    let productPrice = parseInt(curProd.price) || 0;
    return acc + productPrice;
  }, initialValue)

  productSubTotal.textContent = totalProductPrice;
  productFinalTotal.textContent = (totalProductPrice + (12 * totalProductPrice / 100));
}