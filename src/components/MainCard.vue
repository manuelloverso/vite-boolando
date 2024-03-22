<script>
export default {
  name: "MainCard",
  props: {
    card: Object,
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
        :src="selectImage(card)"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        alt=""
      />
      <!-- add to favorites button -->
      <button
        @click="card.isInFavorites = !card.isInFavorites"
        class="favorite"
        :class="card.isInFavorites == true ? 'active' : ''"
      >
        <i class="fa-solid fa-heart"></i>
      </button>
      <!-- card discount and green labels -->
      <!-- discount label -->
      <span v-if="generateDiscount(card) != ''" class="discount-label">{{
        "-" + generateDiscount(card) + "%"
      }}</span>
      <!-- green label -->
      <span
        v-if="extractGreenLabel(card)"
        :class="
          generateDiscount(card) == '' ? 'green-label' : 'moved-green-label'
        "
        >Sostenibilità</span
      >
      <!-- card body -->
      <div class="card-body">
        <p class="mb-1">{{ card.brand }}</p>
        <h3>{{ card.name.toUpperCase() }}</h3>
        <span v-if="generateDiscount(card) != ''" class="discounted me-3"
          >{{
            (card.price - (generateDiscount(card) * card.price) / 100).toFixed(
              2
            )
          }}€</span
        >
        <span :class="generateDiscount(card) == '' ? '' : 'deleted-price'"
          >{{ card.price }}€</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
