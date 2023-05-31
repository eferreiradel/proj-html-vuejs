<template>
  <div class="container-fluid p-0">
    <div class="container p-5">
      <div class="row p-5 text-center">
        <h3 class="critics">What critics are saying about us</h3>
      </div>
      <div class="row p-5">
        <div class="col-6 p-0">
          <slider></slider>
        </div>
        <div class="col-6 p-0">
          <infoContainer></infoContainer>
        </div>
        <div class="row pt-5">
          <div class="col-6 container-left p-0">
            <div class="card">
              <card-left></card-left>
            </div>
          </div>
          <div class="col-6 container-right p-0">
            <div class="card">RIGHT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { criticsStore } from "../../stores/components-store";
import slider from "./slider.vue";
import infoContainer from "./info-container.vue";
import cardLeft from "./cards-grid/card-left.vue";
export default {
  name: "critics",
  components: {
    slider,
    infoContainer,
    cardLeft,
  },
};
</script>
<style scoped lang="scss">
.grid-container {
  display: flex;
  justify-content: space-between;
}
.container-left {
  display: flex;
  justify-content: flex-start;
}
.container-right {
  display: flex;
  justify-content: flex-end;
}
.card {
  width: 95%;
  height: 35em;
}
</style>
