<script>
import AppHeader from "./components/AppHeader.vue";
import MainCards from "./components/MainCards.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  //My components
  components: {
    AppHeader,
    MainCards,
    AppFooter,
  },
  data() {
    return {
      hello: "hello wrodld",
    };
  },
};
</script>

<template>
  <AppHeader />
  <MainCards />
  <AppFooter />
</template>

<style></style>
