<template>
  <div class="hero-header-nav">
    <div class="logo-container">
      <img
        src="../../assets/images/logo/logo-restaurant.png"
        class="slider-image"
      />
    </div>
    <nav>
      <a class="nav--links" v-for="link in navLinks" :key="link.destination">
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
};
</script>
<style></style>
