import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        cart: [],
    }
  },
  mutations: {
    addToCart (state, cartItem) {
        const itemIndex = state.cart
            .findIndex(p => p.product.id === cartItem.product.id);

        if (itemIndex < 0) {
            state.cart.push(cartItem);
            return;
        }

        state.cart[itemIndex].quantity += cartItem.quantity;
        
    },
    removeFromCart(state, itemIndex) {
        state.cart.splice(itemIndex, 1);
    }
  },
  actions: {
    addToCart ({ commit }, cartItem ) {
        commit('addToCart', cartItem);
    },
    removeFromCart({ commit }, itemIndex) {
        commit('removeFromCart', itemIndex);
      }
  },
  getters: {
    totalItems (state) {
        return state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice(state) {
        return state.cart.reduce(
          (acc, item) => acc + (item.quantity * item.product.price),
           0).toFixed(2);
    }
  }
});

export default store;
