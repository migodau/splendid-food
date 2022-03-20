<script setup>
</script>

<template>
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
  </header>

  <RouterView />
</template>

<style scoped>
#app {
  font-weight: normal;
}

header {
  line-height: 1.5;
  width: 100%;
  padding: 0 24px;
  display: flex;
  margin: 16px 0;
}

.header__title {
  font-weight: 700;
  padding-right: 16px;
  border-right: #ddd 1px solid;
}

.menu {
  display: flex;
  margin-left: 16px;
  gap: 16px;
}

.menu__item {
  height: 100%;
  display: flex;
  align-items: center;
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
