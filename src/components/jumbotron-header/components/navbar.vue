<template>
  <div class="container-fluid navbar px-5">
    <div class="logo-container">
      <img
        src="../../../assets/images/logo/logo-restaurant.png"
        alt="avada logo"
      />
    </div>
    <nav class="d-flex gap-5">
      <a class="nav-link" href="#" v-for="link in navItems">{{
        link.linkRef
      }}</a>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navBar",
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../../styles/variables.scss";
.navbar {
  height: $navbar--height;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}
.logo-container {
}
img {
  width: 75%;
}
</style>
