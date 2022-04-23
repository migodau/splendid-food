<template>
  <main>
    <h2 class="display-3">Welcome to Splendid Food!</h2>

    <div class="recommendations">
      <h3>Our recommendations 🔥</h3>
      <div class="recommendation-list">
        <ProductCard 
        v-for="(product, index) of recommended" 
        :product="product" v-bind:key="index"
      />
      </div>
    </div>
  </main>
</template>

<style scoped>
.recommendations {
  margin-top: 32px;
}
  .recommendation-list {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    flex-flow: wrap;
  }
</style>

<script>
  import ProductCard from '@/components/ProductCard.vue';
  import { getRecommended } from '@/services/products';

  // import { useStore } from '@/store/cart'

  export default {
    components: {
      ProductCard,
    },
    data() {
      return {
        recommended: []
      }
    },
    beforeMount() {
      getRecommended()
        .then(data => this.recommended = data);
    }
  }
</script>
