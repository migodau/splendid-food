import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            counter: 0,
            cart: [],
        }
    },
    getters: {
        totalQuantity() {
            return this.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
        totalPrice() {
            return this.cart.reduce(
              (acc, item) => acc + (item.quantity * item.product.price),
               0).toFixed(2);
        }
    },
    actions: {
        addToCart(product, quantity) {
            const index = this.cart.findIndex(i => i.product.id === product.id);
            if (index < 0) {
                this.cart.push({ product, quantity });
                return
            }

            this.cart[index].quantity += quantity;
            
        },
        removeFromCart(itemIndex) {
            this.cart.splice(itemIndex, 1);
        }
    }
  })