<template>
  <div class="main">
    <div class="row justify-content-center">
      <div class="col-6 d-flex flex-column gap-2 info-container p-0">
        <p class="caption mb-5">
          {{ exploreTheMenuStore.mainCaption.toUpperCase() }}
        </p>
        <h1 class="title mb-4">
          {{ exploreTheMenuStore.mainCaption.toUpperCase() }}
        </h1>
        <p class="mb-5">
          {{ exploreTheMenuStore.paragraph }}
        </p>
        <div class="container p-0">
          <a href="#" class="btn btn--primary">
            {{ exploreTheMenuStore.buttonText.toUpperCase() }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { exploreTheMenuStore } from "../../stores/store";
import { dataStore } from "../../stores/store";
export default {
  name: "infoContainer",
  data() {
    return {
      exploreTheMenuStore,
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

  .caption {
    position: relative;
    font-family: sans-serif;
    font-size: small;
  }
  .caption::before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 40px;
    height: 1px;
    left: -80px;
    bottom: 50%;
    background-color: white;
  }

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
