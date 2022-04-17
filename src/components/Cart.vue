<template>
  <div class="toggle-cart-button" :class="{ active: showCart }" @click="toggleCart()">🛒 Cart ({{ store.totalQuantity }})</div>

  <div class="cart" v-if="showCart">
    <div class="no-items" v-if="!store.cart.length">
      <p>The cart is empty</p>
    </div>
    <div class="cart-items" v-if="!!store.cart.length">
      <div v-for="(item, index) of store.cart" :key="index" class="cart-item">
        <div class="cart-item__name">{{item.product.emoji}} {{item.product.name}}</div>
        <div class="cart-item__quantity">{{item.quantity}} x ${{item.product.price}}</div>
        <div class="cart-item__price">${{ (item.quantity * item.product.price).toFixed(2) }}</div>
        <div class="cart-item__remove" @click="store.removeFromCart(index)">X</div>
      </div>
      
      <hr/>
    
      <div class="total">
        💰 Total: <span class="total-price">${{ store.totalPrice }}</span>
      </div>

      <div class="checkout">
        <button class="btn btn-success checkout-button">proceed to checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle-cart-button {
  padding: 8px;
  cursor: pointer;
}

.toggle-cart-button.active {
  color: hsla(160, 100%, 37%, 1);
}
.cart {
  position: fixed;
  top: 88px;
  right: 0;
  margin-right: auto;
  height: 92vh;
  width: 350px;
  background-color: #eee;
  z-index: 10;
  border: rgb(240, 240, 240) 1px solid;
  padding: 16px 8px;
}

.cart-item {
  display: grid;
  grid-template-columns: 90px 90px 90px auto;
}

.cart-item__price {
  text-align: right;
}

.cart-item__quantity {
  text-align: center;
}

.cart-item__remove {
  cursor: pointer;
  text-align: right;
}

.total {
  font-size: 16px;
}

.total-price {
  font-weight: 700;
}

.checkout {
  text-align: center;
  margin-top: 16px;
}

</style>

<script>
import { useCartStore } from '@/store/cart';

export default {
  setup() {
    const store = useCartStore();
    return { store };
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>
