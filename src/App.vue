<template>
  <main class="page-wrapper">
    <header>
      <h1 class="header__title">🥦 Splendid Food 🍎</h1>
      <div class="menu">
        <div class="menu__item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="menu__item">
          <router-link to="/products">Products</router-link>
        </div>
      </div>
      <div class="cart-button-wrapper">
        <Cart />
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
#app {
  font-weight: normal;
}

.page-wrapper {
  margin: 0;
  padding: 0;
  padding-top: 88px;
}

header {
  position: fixed;
  top: 0;
  line-height: 1.5;
  width: 100%;
  padding: 8px 24px;
  display: flex;
  margin: 16px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #ccc solid;
  z-index: 10;
}

.header__title {
  font-weight: 700;
  padding-right: 16px;
  border-right: #ddd 1px solid;
  white-space: nowrap;
}

.menu {
  display: flex;
  margin-left: 16px;
  gap: 16px;
  width: 100%;
}

.menu__item {
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.cart-button-wrapper {
  float: right;
  white-space: nowrap;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  .menu__item:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>

<script>
  import Cart from '@/components/Cart.vue';

  export default {
    components: {
      Cart
    },
  }
</script>
