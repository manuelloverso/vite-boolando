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
      modalProduct: {},
      isBlur: false,
    };
  },

  methods: {
    fillModal(product) {
      this.isBlur = true;
      this.isModalShowing = true;
      this.modalProduct = product;
      console.log(this.modalProduct);
    },
  },

  created() {
    store.getProducts();
  },
};
</script>

<template>
  <body>
    <div v-if="isModalShowing" class="overlay"></div>
    <div v-if="isModalShowing" class="my-modal">
      <img :src="'/images/' + modalProduct.frontImage" alt="" />
      <div class="product-info">
        <h2>{{ modalProduct.name }}</h2>
        <button @click="isModalShowing = false">X</button>
      </div>
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
.overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(2px);
}

.my-modal {
  display: flex;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 20px 0;
  gap: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: red;

  img {
    width: 300px;
  }
}
</style>
