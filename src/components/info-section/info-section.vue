<template>
  <div class="container-fluid p-5" id="infoSection">
    <div class="container">
      <div class="row justify-content-center p-5">
        <div class="col-12">
          <div class="row">
            <div class="col-7 p-5">
              <div class="row p-0">
                <div class="col-9 p-0">
                  <info-column></info-column>
                </div>
              </div>
            </div>
            <div class="col-5 p-0">
              <photo-column></photo-column>
            </div>
          </div>
          <card-grid></card-grid>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { menu } from "../../stores/store";
import { dataStore } from "../../stores/store";
// components
import cardGrid from "./card-grid/card-grid.vue";
import infoColumn from "./info-column.vue";
import photoColumn from "./photo-column.vue";
export default {
  name: "infoSection",
  data() {
    return {
      menu,
    };
  },
  components: {
    infoColumn,
    photoColumn,
    cardGrid,
  },
};
</script>
<style lang="scss">
@import "../../styles/variables.scss";
</style>
