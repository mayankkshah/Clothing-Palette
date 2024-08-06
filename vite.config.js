import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // index.html is the entry point
        about: resolve(__dirname, "about.html"), // about.html is the entry point
        contact: resolve(__dirname, "contact.html"), // contact.html is the entry point
        products: resolve(__dirname, "products.html"), // products.html is the entry point
        addToCart: resolve(__dirname, "addToCart.html"), // addToCart.html is the entry point
      }
    }
  }
});