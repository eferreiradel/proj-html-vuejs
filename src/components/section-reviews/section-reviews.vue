<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 px-0">
          <div class="container-fluid d-flex p-0 justify-content-center">
            <div class="col-6 p-0">
              <hero></hero>
            </div>
            <div class="col-6 container-right">
              <infoColumn :votes="votes"></infoColumn>
            </div>
          </div>
          <div class="container-fluid p-0">
            <div class="row card-grid pt-5 py-0 mx-0">
              <div class="col-6 p-0">
                <card-left :votes="votes"></card-left>
              </div>
              <div class="col-6 p-0">
                <card :votes="votes"></card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// stores
import { votes } from "../../stores/votes";
import infoColumn from "./components/info-column.vue";
import hero from "./components/hero.vue";
import card from "./components/card-right.vue";
import cardLeft from "./components/card-left.vue";
export default {
  name: "sectionReviews",
  data() {
    return {
      votes,
    };
  },
  components: {
    infoColumn,
    hero,
    card,
    cardLeft,
  },
};
</script>
<style scoped lang="scss">
.card-grid {
  display: flex;
  justify-content: space-between;
}
.container-right {
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
