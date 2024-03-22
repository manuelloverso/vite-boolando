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
  },
};
</script>

<template>
  <div class="col-4">
    <div class="card">
      <img :src="'/images/' + card.frontImage" alt="" />
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
        <span class="full-price">{{ card.price }}€</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
