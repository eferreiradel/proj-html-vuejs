<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center p-0">
      <div class="col-8 p-0">
        <div class="row py-5">
          <div class="col-5 p-0">
            <info-column></info-column>
          </div>
          <div class="col-6 offset-1 p-0">
            <image-poster :menu="menu"></image-poster>
          </div>
        </div>
        <card-grid></card-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { menu } from "../../stores/menu.store";
import infoColumn from "./components/info-column.vue";
import imagePoster from "./components/image-poster.vue";
import cardGrid from "./components/card-grid.vue";
export default {
  name: "infoSection",
  data() {
    return {
      menu,
    };
  },
  components: {
    infoColumn,
    imagePoster,
    cardGrid,
  },
};
</script>
<style></style>
