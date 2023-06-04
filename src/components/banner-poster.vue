<template>
  <div class="container-fluid pt-5 px-0">
    <div class="banner mt-5 mb-0">
      <img src="../assets/images/jumbo-slider/page52x.jpg" />
      <div class="card">
        <span class="pricetag"
          >{{ menu.kungPaoChicken.item }} -
          {{ menu.kungPaoChicken.price }}$</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { menu } from "../stores/menu.store";
export default {
  name: "bannerPoster",
  data() {
    return {
      menu,
    };
  },
};
</script>
<style scoped lang="scss"></style>
