<script>
export default {
  name: "MainProduct",
  props: {
    product: Object,
  },

  data() {
    return {
      hover: false,
    };
  },

  methods: {
    //Function to extract the discount from the object as a number in order to calculate the discounted price
    generateDiscount(product) {
      let discount = "";
      product.badges.forEach((obj) => {
        if (obj.type == "discount") {
          discount = obj.value;
          discount = Number(discount.slice(1, -1));
        }
      });
      return discount;
    },

    //function to extract the soustainabilty label (true or false)
    extractGreenLabel(product) {
      let isGreen = false;
      product.badges.forEach((obj) => {
        if (obj.type == "tag") {
          isGreen = true;
        }
      });
      return isGreen;
    },

    selectImage(product) {
      if (this.hover == false) {
        return "/images/" + product.frontImage;
      } else {
        return "/images/" + product.backImage;
      }
    },
  },
};
</script>

<template>
  <div class="col-4">
    <div class="card">
      <!-- card image -->
      <img
        :src="selectImage(product)"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        alt=""
      />
      <!-- add to favorites button -->
      <button
        @click="product.isInFavorites = !product.isInFavorites"
        class="favorite"
        :class="{ active: product.isInFavorites }"
      >
        <i class="fa-solid fa-heart"></i>
      </button>
      <!-- card discount and green labels -->
      <!-- discount label -->
      <span v-if="generateDiscount(product) != ''" class="discount-label">{{
        "-" + generateDiscount(product) + "%"
      }}</span>
      <!-- green label -->
      <span
        v-if="extractGreenLabel(product)"
        :class="
          generateDiscount(product) == '' ? 'green-label' : 'moved-green-label'
        "
        >Sostenibilità</span
      >
      <!-- card body -->
      <div class="card-body">
        <p class="mb-1">{{ product.brand }}</p>
        <h3 class="product-name" @click="$emit('showProduct', product)">
          {{ product.name.toUpperCase() }}
        </h3>
        <span v-if="generateDiscount(product) != ''" class="discounted me-3"
          >{{
            (
              product.price -
              (generateDiscount(product) * product.price) / 100
            ).toFixed(2)
          }}€</span
        >
        <!-- generateDiscount(product) == '' ? '' : 'deleted-price' -->
        <span :class="{ 'deleted-price': generateDiscount(product) != '' }"
          >{{ product.price }}€</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-name {
  cursor: pointer;
}
</style>
