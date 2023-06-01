<template>
  <div class="container-fluid img-container p-0">
    <img
      src="../../../assets/images/poster-images/blog72x-1200x1375.jpg"
      alt=""
    />
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
  height: 100%;
  width: 100%;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
