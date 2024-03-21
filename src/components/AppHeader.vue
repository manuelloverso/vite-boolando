<script>
export default {
  name: "AppHeader",

  data() {
    return {
      categories: ["Uomo", "Donna", "Bambino"],
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="categories">
        <a v-for="category in categories" href="#">{{ category }}</a>
      </div>
      <div class="logo">
        <img width="130" src="/images/boolean-logo.png" alt="" />
      </div>
      <div class="icons">
        <i class="fa-regular fa-user icon"></i>
        <i class="fa-regular fa-heart icon"></i>
        <i class="fa-solid fa-bag-shopping icon"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
