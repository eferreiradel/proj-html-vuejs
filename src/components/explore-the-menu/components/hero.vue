<template>
  <div class="container-fluid img-container p-0">
    <img src="../../../assets/images/jumbo-slider/slider32x.jpg" alt="" />
  </div>
</template>
<script>
export default {
  name: "hero",
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.img-container {
  height: 40rem;
}
img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
