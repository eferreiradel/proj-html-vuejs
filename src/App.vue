<template>
  <hero-header-jumbotron> </hero-header-jumbotron>
</template>

<script>
import { dataStore } from "./stores/store";
import heroHeaderJumbotron from "./components/header-jumbotron/hero-header-jumbotron.vue";
// components
export default {
  name: "App",
  mounted() {},
  components: {
    heroHeaderJumbotron,
  },
};
</script>

<style scoped></style>
