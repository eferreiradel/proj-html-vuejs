<template>
  <section class="hero-header-jumbotron">
    <hero-header-nav :navLinks="navLinks"></hero-header-nav>
    <div class="hero_header--main bg-green-500 p-5">
      <div class="container p-5 w-75">
        <p class="caption mb-5">
          {{ dataStore.headerMainCaption.toUpperCase() }}
        </p>
        <h1 class="main-header--title mb-4">
          {{ dataStore.headerTitle.toUpperCase() }}
        </h1>
        <p>
          {{ dataStore.hederMainText }}
        </p>
        <div class="container p-0">
          <a href="#" class="btn btn--primary">
            {{ dataStore.headerMainBtn.toLocaleUpperCase() }}
          </a>
        </div>
      </div>
    </div>
    <div class="hero_header--slider">
      <div class="tag--container">
        <button class="btn btn-light tag p-2">
          <i class="fa-solid fa-images"></i>
          <p>demos</p>
        </button>
        <button class="btn btn-light tag p-2">
          <div class="price--container d-flex p-0">
            <span class="price--symbol">$</span>
            <span class="price">{{ dataStore.headerSliderTagPrice }}</span>
          </div>
          <p>On sale</p>
        </button>
      </div>
      <img
        src="../../assets/images/jumbo-slider/slider52x.jpg"
        class="slider-image"
      />
    </div>
  </section>
</template>
<script>
// store
import { dataStore } from "../../stores/store";
import heroHeaderNav from "./hero-header-nav.vue";

export default {
  name: "heroHeaderjumbotron",
  data() {
    return {
      dataStore,
      navLinks: [
        {
          destination: "Home",
        },
        {
          destination: "Culinary History",
        },
        {
          destination: "Our Team",
        },
        {
          destination: "Our Menu",
        },
        {
          destination: "Takeout",
        },
        {
          destination: "Bulletin",
        },
        {
          destination: "Reservation",
        },
        {
          destination: "",
        },
      ],
    };
  },
  components: {
    heroHeaderNav,
  },
};
</script>
<style></style>
