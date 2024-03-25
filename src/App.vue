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
    };
  },

  created() {
    store.getProducts();
    console.log(store);
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="my-container row row-gap-3 my-3">
      <MainProduct
        :product="product"
        v-for="product in store.products"
        :key="product.id"
      />
    </div>
  </main>
  <AppFooter />
</template>

<style></style>
