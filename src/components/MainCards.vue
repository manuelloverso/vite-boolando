<script>
export default {
  name: "MainCards",

  data() {
    return {
      cards: [
        {
          img: "/images/1.webp",
          brand: "Levi's",
          article: "Relaxed fit tee unisex",
          price: 29.99,
          discount: 50,
        },

        {
          img: "/images/1.webp",
          brand: "Levi's",
          article: "Relaxed fit tee unisex",
          price: 29.99,
          discount: 50,
        },

        {
          img: "/images/1.webp",
          brand: "Levi's",
          article: "Relaxed fit tee unisex",
          price: 29.99,
          discount: 50,
        },

        {
          img: "/images/1.webp",
          brand: "Levi's",
          article: "Relaxed fit tee unisex",
          price: 29.99,
          discount: 50,
        },

        {
          img: "/images/1.webp",
          brand: "Levi's",
          article: "Relaxed fit tee unisex",
          price: 29.99,
          discount: 50,
        },

        {
          img: "/images/1.webp",
          brand: "Levi's",
          article: "Relaxed fit tee unisex",
          price: 28.99,
          discount: 50,
        },
      ],
    };
  },

  methods: {
    calculatePrice(index) {
      const price = this.cards[index].price;
      const discount = this.cards[index].discount;
      let discounted = 0;
      if (discount > 0) {
        discounted = price - (discount * price) / 100;
      }
      return discounted.toFixed(2);
    },
  },
};
</script>

<template>
  <main>
    <div class="my-container row row-gap-3 my-3">
      <div v-for="(card, index) in cards" class="col-4">
        <div class="card">
          <img :src="card.img" alt="" />
          <div class="card-body">
            <p class="mb-1">{{ card.brand }}</p>
            <h3>{{ card.article.toUpperCase() }}</h3>
            <span class="discounted me-3">{{ calculatePrice(index) }}€</span>
            <span class="full-price">{{ card.price }}€</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
