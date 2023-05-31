<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-7 p-0">
        <slider></slider>
      </div>
      <div class="col-5 p-0">
        <info-container></info-container>
      </div>
    </div>
  </div>
</template>
<script>
import infoContainer from "./info-container.vue";
import slider from "./slider.vue";
export default {
  name: "exploreTheMenu",
  data() {
    return {};
  },
  components: {
    slider,
    infoContainer,
  },
};
</script>

<style scoped lang="scss"></style>
