<template>
  <div class="main">
    <div class="row justify-content-center">
      <div class="col-8 d-flex flex-column gap-2 info-container">
        <p class="caption mb-5">
          {{ criticsStore.author.toUpperCase() }}
        </p>
        <h1 class="title mb-4">
          {{ criticsStore.mainCaption.toUpperCase() }}
        </h1>
        <div class="container votes">
          <i
            v-for="index in votes.newYorkTimes"
            :key="index"
            class="fas fa-star"
          ></i>
        </div>
        <div class="line-thin-short my-5"></div>
        <p class="mb-5">
          {{ criticsStore.paragraph }}
        </p>
        <div class="container p-0">
          <a href="#" class="btn btn--primary">
            {{ criticsStore.buttonText.toUpperCase() }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { criticsStore } from "../../stores/components-store";
import { votes } from "../../stores/components-store";
export default {
  name: "infoContainer",
  data() {
    return {
      criticsStore,
      votes,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../styles/variables.scss";

.title {
  font-size: 4em;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: bolder;
  font-weight: bolder;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);

  .row {
  }
  info-container {
    display: flex;
  }
  .title {
    font-size: 3rem;
    font-weight: bolder;
  }
}
</style>
