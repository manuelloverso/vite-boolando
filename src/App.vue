<script>
import AppHeader from "./components/AppHeader.vue";
import MainProduct from "./components/MainProduct.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";

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
      products: [],
    };
  },

  mounted() {
    axios.get("http://localhost:3000/products").then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="my-container row row-gap-3 my-3">
      <MainProduct
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </div>
  </main>
  <AppFooter />
</template>

<style></style>
