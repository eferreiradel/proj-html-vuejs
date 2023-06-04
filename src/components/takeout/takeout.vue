<template>
  <div class="container-fluid py-5">
    <div class="row p-0">
      <div class="col-7 column-right p-0">
        <hero></hero>
      </div>
      <div class="col-5 column-left p-0 bg-black">
        <info-column></info-column>
      </div>
    </div>
  </div>
</template>
<script>
import infoColumn from "./components/info-column.vue";
import hero from "./components/hero.vue";

export default {
  name: "takeout",
  components: {
    infoColumn,
    hero,
  },
};
</script>
<style scoped lang="scss">
.column-left {
  display: flex;
  align-items: center;
}
</style>
