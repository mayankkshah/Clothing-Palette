export function showToast(operation, id) {
  const toast = document.createElement('div');
  toast.classList.add('toast');

  // Add or remove product from cart
  if (operation === "add") {
    toast.textContent = `Product with ID ${id} added to cart`;
  } else {
    toast.textContent = `Product with ID ${id} removed from cart`;
  }

  document.body.appendChild(toast);

  // Remove the toast after 2 seconds
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
