<template>
  <section id="hero-header-jumbotron">
    <hero-header-nav :navLinks="navLinks"></hero-header-nav>
    <infoContainer></infoContainer>
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
// components
import infoContainer from "./info-container.vue";

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
    infoContainer,
  },
};
</script>
<style scoped lang="scss">
@import "../../styles/variables.scss";
#hero-header-jumbotron {
  width: 100%;
  height: 100vh;
  background-color: rgb(61, 121, 173);
  position: relative;
  display: flex;
  .hero_header--main {
    flex: 4;
    background-color: rgb(0, 0, 0);
    color: white;

    .caption {
      position: relative;
      font-family: sans-serif;
      font-size: small;
    }
    .caption::before {
      position: absolute;
      content: "";
      display: inline-block;
      width: 40px;
      height: 1px;
      left: -80px;
      bottom: 50%;
      background-color: white;
    }
    .container {
      margin-top: $navbar--height;
    }

    .title {
      font-size: 3rem;
      font-weight: bolder;
    }
  }
  .hero_header--slider {
    position: relative;
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    .slider-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
