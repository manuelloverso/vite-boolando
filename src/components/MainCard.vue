<script>
export default {
  name: "MainCard",
  props: {
    card: Object,
  },

  data() {
    return {};
  },

  methods: {
    //Function to extract the discount from the object as a number in order to calculate the discounted price
    generateDiscount(card) {
      const price = card.price;
      let discount;
      if (card.badges.length == 2) {
        discount = card.badges[1].value;
      } else {
        if (card.badges[0].value != "Sostenibilità") {
          discount = card.badges[0].value;
        } else {
          discount = "";
        }
      }
      if (discount != "") {
        discount = Number(discount.slice(1, -1));
      }
      return discount;
    },

    //function to extract the soustainabilty label (true or false)
    extractGreenLabel(card) {
      let isGreen = false;
      if (card.badges.length == 2) {
        isGreen = true;
      } else {
        if (card.badges[0].value == "Sostenibilità") {
          isGreen = true;
        }
      }
      return isGreen;
    },
  },
};
</script>

<template>
  <div class="col-4">
    <div class="card">
      <!-- card image -->
      <img :src="'/images/' + card.frontImage" alt="" />
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
