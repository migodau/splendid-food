<template>
  <div class="card product-card">
    <div class="product-card__title">
      <h3 class="card-title">{{ product.name }} {{ product.emoji }}</h3>
    </div>
    <p class="card-text product-card__text">
      {{ product.description }}
    </p>
    <div class="product-card__price">
      ${{ product.price }}
    </div>
    <div class="product-card__form">
      <input
        class="form-control form-control-sm"
        name="product_quantity"
        type="number"
        placeholder="0"
        v-model="quantity"
      />
      <button 
        class="btn btn-success product-card__button" 
        @click="add"
        :disabled="quantity <= 0"
      >Add</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  width: 200px;
  border: #eee 1px solid;
  height: 250px;
  justify-content: space-between;
}

.product-card__text {
  padding: 0 16px;
}

.product-card__price {
  padding: 0 16px;
  font-weight: 700;
}

.product-card__form {
  padding: 16px;
  display: flex;
}

.product-card__title {
  width: 100%;
  background-color: hsla(160, 100%, 37%, 0.2);
  text-align: center;
  padding: 4px;
}

.product-card__button {
  margin-left: 2px;
}
</style>

<script>
export default {
  props: ['product'],
  emits: ['addProduct'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    add() {
      this.$emit('addProduct', this.product, this.quantity);
      this.quantity=0;
    }
  }
};
</script>