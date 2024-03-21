<script>
export default {
  name: "AppHeader",

  data() {
    return {
      categories: ["Uomo", "Donna", "Bambino"],
      navigate: [
        "fa-regular fa-user icon",
        "fa-regular fa-heart icon",
        "fa-solid fa-bag-shopping icon",
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="my-container">
      <div class="categories">
        <a v-for="category in categories" href="#">{{ category }}</a>
      </div>
      <div class="logo">
        <img width="130" src="/images/boolean-logo.png" alt="" />
      </div>
      <div class="icons justify-content-end">
        <i v-for="icon in navigate" :class="icon"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
