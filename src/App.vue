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
    };
  },

  methods: {
    fillModal(product) {
      this.isModalShowing = true;
      this.modalProduct = product;
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
    <!-- modal card showed on article's name click -->
    <div v-if="isModalShowing" class="my-modal">
      <img :src="'/images/' + modalProduct.frontImage" alt="" />
      <div class="product-info">
        <h2>{{ modalProduct.name }}</h2>
        <p>{{ modalProduct.brand }}</p>
        <button class="btn btn-danger" @click="isModalShowing = false">
          Close
        </button>
      </div>
    </div>
    <!-- site header -->
    <AppHeader />
    <!-- site main -->
    <main>
      <div class="my-container row row-gap-3 my-3">
        <!-- product cards -->
        <MainProduct
          @showProduct="fillModal"
          :product="product"
          v-for="product in store.products"
          :key="product.id"
        />
      </div>
    </main>
    <!-- site footer -->
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
  background-color: white;

  img {
    width: 300px;
  }
}
</style>
