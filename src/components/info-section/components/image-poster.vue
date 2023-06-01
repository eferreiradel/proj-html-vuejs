<template>
  <div class="container-fluid poster--container p-0">
    <img
      class=".img"
      src="../../../assets/images/poster-images/info22x.jpg"
      alt=""
    />
    <div class="container-fluid hover-poster--container p-3">
      <span class="text-white">
        California Rolls {{ menu.californiaRolls.price }}$
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "imagePoster",
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  height: 37rem;
}
</style>
