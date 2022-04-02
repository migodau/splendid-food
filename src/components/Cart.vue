<template>
  <div class="cart-button" :class="{ active: showCart }" @click="toggleCart()">🛒 Cart ({{ totalQuantity }})</div>

  <div class="cart" v-if="showCart">
    <div class="no-items" v-if="!cart.length">
      <p>The cart is empty</p>
    </div>
    <div class="cart-items" v-if="!!cart.length">
      <div v-for="(item, index) of cart" :key="index" class="cart-item">
        <div class="cart-item__name">{{item.product.emoji}} {{item.product.name}}</div>
        <div class="cart-item__quantity">{{item.quantity}} x ${{item.product.price}}</div>
        <div class="cart-item__price">${{ (item.quantity * item.product.price).toFixed(2) }}</div>
        <div class="cart-item__remove" @click="$emit('removeItem', index)">X</div>
      </div>
    </div>

    <hr/>
    
    <div class="total">
      Total: <span class="total-price">${{ totalPrice }}</span>
    </div>
  </div>
</template>

<style scoped>
.cart-button {
  padding: 8px;
  cursor: pointer;
}

.cart-button.active {
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

</style>

<script>
export default {
  props: [ 'cart' ],
  emits: ['removeItem'],
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
  computed: {
    totalQuantity() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + (item.quantity * item.product.price),
         0).toFixed(2);
    }
  }
};
</script>
