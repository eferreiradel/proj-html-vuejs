<template>
  <header>
    <jumbotron-header></jumbotron-header>
  </header>
  <main>
    <section id="infoSection">
      <infoSection></infoSection>
    </section>
    <section>
      <explore-the-menu></explore-the-menu>
    </section>
    <section>
      <banner></banner>
    </section>
    <section>
      <section-reviews></section-reviews>
    </section>
    <section>
      <banner-poster></banner-poster>
    </section>
    <section>
      <bannerPromotions></bannerPromotions>
    </section>
    <section>
      <promotions-cards-grid></promotions-cards-grid>
    </section>
    <section id="takeOut">
      <takeout></takeout>
    </section>
    <section id="menu">
      <menu-cards></menu-cards>
    </section>
    <banner-poster-menu-item></banner-poster-menu-item>
  </main>
  <footer>
    <footer-section></footer-section>
  </footer>
</template>

<script>
import jumbotronHeader from "./components/jumbotron-header/jumbotron-header.vue";
import infoSection from "./components/info-section/info-section.vue";
import exploreTheMenu from "./components/explore-the-menu/explore-the-menu.vue";
import banner from "./components/reusables/banner.vue";
import sectionReviews from "./components/section-reviews/section-reviews.vue";
import bannerPoster from "./components/banner-poster.vue";
import bannerPromotions from "./components/banner-promotions.vue";
import promotionsCardsGrid from "./components/promotions-cards-grid/promotions-cards-grid.vue";
import takeout from "./components/takeout/takeout.vue";
import menuCards from "./components/menu-cards/menu-cards.vue";
import bannerPosterMenuItem from "./components/banner-poster-menu-item.vue";
import footerSection from "./components/footer/footer.vue";
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
    bannerPromotions,
    promotionsCardsGrid,
    takeout,
    menuCards,
    bannerPosterMenuItem,
    footerSection,
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
