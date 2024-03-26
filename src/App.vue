<script>
import AppHeader from "./components/AppHeader.vue";
import MainProduct from "./components/MainProduct.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store.js";
export default {
  name: "App",
  //My components
  components: {
    AppHeader,
    MainProduct,
    AppFooter,
  },
  data() {
    return {
      store,
      isModalShowing: false,
    };
  },

  created() {
    store.getProducts();
    console.log(store);
  },
};
</script>

<template>
  <body>
    <div class="my-modal" :class="{ 'd-block': isModalShowing }">
      <h1>My modal</h1>
      <button @click="isModalShowing = false">X</button>
    </div>
    <AppHeader />
    <main>
      <div class="my-container row row-gap-3 my-3">
        <MainProduct
          @showProduct="isModalShowing = true"
          :product="product"
          v-for="product in store.products"
          :key="product.id"
        />
      </div>
    </main>
    <AppFooter />
  </body>
</template>

<style lang="scss">
.my-modal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 300px;
  aspect-ratio: 1;
  background-color: red;
}
</style>
