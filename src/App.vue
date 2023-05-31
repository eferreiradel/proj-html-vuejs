<template>
  <hero-header-jumbotron> </hero-header-jumbotron>
  <info-section></info-section>
  <explore-the-menu></explore-the-menu>
  <critics></critics>
</template>

<script>
import { dataStore } from "./stores/store";
// components
import heroHeaderJumbotron from "./components/header-jumbotron/hero-header-jumbotron.vue";
import infoSection from "./components/info-section/info-section.vue";
import exploreTheMenu from "./components/explore-the-menu/explore-the-menu.vue";
import critics from "./components/critics/critics.vue";
export default {
  name: "App",
  mounted() {},
  components: {
    heroHeaderJumbotron,
    infoSection,
    exploreTheMenu,
    critics,
  },
};
</script>

<style scoped></style>
