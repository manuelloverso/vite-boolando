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
    extractDiscount() {
      let discount = "";
      this.product.badges.forEach((obj) => {
        if (obj.type == "discount") {
          discount = obj.value;
          discount = Number(discount.slice(1, -1));
        }
      });
      return discount;
    },

    generateDiscount(discount) {
      return (
        this.product.price -
        (discount * this.product.price) / 100
      ).toFixed(2);
    },

    //function to extract the soustainabilty label (true or false)
    extractGreenLabel() {
      let isGreen = false;
      this.product.badges.forEach((obj) => {
        if (obj.type == "tag") {
          isGreen = true;
        }
      });
      return isGreen;
    },

    selectImage() {
      if (this.hover == false) {
        return "/images/" + this.product.frontImage;
      } else {
        return "/images/" + this.product.backImage;
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
        :src="selectImage()"
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
      <span v-if="extractDiscount() != ''" class="discount-label">{{
        "-" + extractDiscount() + "%"
      }}</span>
      <!-- green label -->
      <span
        v-if="extractGreenLabel()"
        :class="extractDiscount() == '' ? 'green-label' : 'moved-green-label'"
        >Sostenibilità</span
      >
      <!-- card body -->
      <div class="card-body">
        <p class="mb-1">{{ product.brand }}</p>
        <!-- product name -->
        <h3
          class="product-name"
          @click="
            $emit(
              'showProduct',
              product,
              extractDiscount(),
              generateDiscount(extractDiscount())
            )
          "
        >
          {{ product.name.toUpperCase() }}
        </h3>
        <!-- discounted price -->
        <span v-if="extractDiscount() != ''" class="discounted me-3"
          >{{ generateDiscount(extractDiscount()) }}€</span
        >
        <!-- full price -->
        <span :class="{ 'deleted-price': extractDiscount() != '' }"
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
