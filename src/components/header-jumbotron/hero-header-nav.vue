<template>
  <div class="hero-header-nav">
    <div class="logo-container">
      <img
        src="../../assets/images/logo/logo-restaurant.png"
        class="slider-image"
      />
    </div>
    <nav>
      <a
        class="nav--links"
        v-for="link in navLinks"
        @click="displayPlaceholder"
        :key="link.destination"
      >
        {{ link.destination }}
      </a>
      <a href="#">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
    </nav>
  </div>
</template>
<script>
export default {
  name: "heroHeaderNav",
  props: {
    navLinks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    displayPlaceholder() {
      alert("oops, this is a demo, the links are fake ツ");
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../styles/variables.scss";
.hero-header-nav {
  width: 100%;
  height: $navbar--height;
  padding: 0rem 4rem;
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: smaller;
  }
}

.hero-header-nav .logo-container {
  img {
    height: 3rem;
  }
}

.hero-header-nav nav {
  color: white;
  display: flex;
  align-items: center;
  gap: 2em;
}
.hero-header-nav nav a {
  position: relative;
  text-decoration: none;
}
</style>
