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
      modalDiscount: 0,
      discountedPrice: 0,
      isModalInFavorites: null,
    };
  },

  methods: {
    fillModal(product, discount, discountedPrice) {
      this.isModalInFavorites = product.isInFavorites;
      this.modalDiscount = discount;
      this.discountedPrice = discountedPrice;
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
        <h2>{{ modalProduct.name.toUpperCase() }}</h2>
        <p class="mb-2">{{ modalProduct.brand }}</p>
        <span class="modal-discount mb-2" v-if="modalDiscount != ''"
          >-{{ modalDiscount }}%</span
        >
        <span class="mb-2 fs-3">{{ discountedPrice }}€</span>
        <div class="modal-buttons">
          <button
            class="btn btn-primary me-2"
            v-if="modalProduct.isInFavorites == false"
            @click="modalProduct.isInFavorites = !modalProduct.isInFavorites"
          >
            Add to favorites
          </button>
          <button
            class="btn btn-primary me-2"
            v-if="modalProduct.isInFavorites"
            @click="modalProduct.isInFavorites = !modalProduct.isInFavorites"
          >
            Remove from favorites
          </button>
        </div>
      </div>
      <button class="close-btn btn btn-danger" @click="isModalShowing = false">
        Close
      </button>
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

  .close-btn {
    position: absolute;
    bottom: 1.7rem;
    right: 1.7rem;
  }

  img {
    width: 300px;
  }

  .product-info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .modal-discount {
      padding: 5px;
      background-color: red;
      color: white;
    }
  }
}
</style>
