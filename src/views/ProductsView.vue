<script>
  import ProductCard from '@/components/ProductCard.vue';
  import products from '@/assets/products.json'

  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        products: products,
      }
    }
  }
</script>

<template>
  <main>
    <h2>Products</h2>
    <div class="product-list">
      <ProductCard v-for="(product, index) of products" :product="product" v-bind:key="index" />
    </div>
  </main>
</template>

<style scoped>
  .product-list {
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }
</style>
