<template>
  <jumbotron-header></jumbotron-header>
  <infoSection></infoSection>
  <explore-the-menu></explore-the-menu>
  <banner></banner>
  <section-reviews></section-reviews>
  <banner-poster></banner-poster>
</template>

<script>
import jumbotronHeader from "./components/jumbotron-header/jumbotron-header.vue";
import infoSection from "./components/info-section/info-section.vue";
import exploreTheMenu from "./components/explore-the-menu/explore-the-menu.vue";
import banner from "./components/reusables/banner.vue";
import sectionReviews from "./components/section-reviews/section-reviews.vue";
import bannerPoster from "./components/banner-poster.vue";
export default {
  name: "App",
  mounted() {},
  components: {
    jumbotronHeader,
    infoSection,
    exploreTheMenu,
    banner,
    sectionReviews,
    bannerPoster,
  },
};
</script>

<style scoped></style>
