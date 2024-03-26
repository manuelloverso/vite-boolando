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
      modelProduct: {},
    };
  },

  methods: {
    fillModal(product) {
      this.isModalShowing = true;
      this.modelProduct = product;
      console.log(this.modelProduct);
    },
  },

  created() {
    store.getProducts();
    console.log(store);
  },
};
</script>

<template>
  <body>
    <div v-if="isModalShowing" class="my-modal">
      <h1>{{ modelProduct.name }}</h1>
      <button @click="isModalShowing = false">X</button>
    </div>
    <AppHeader />
    <main>
      <div class="my-container row row-gap-3 my-3">
        <MainProduct
          @showProduct="fillModal"
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
