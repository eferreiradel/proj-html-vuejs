<template>
  <div class="hero_header--main p-0">
    <div class="container w-75">
      <div class="row justify-content-center">
        <div class="col-6 p-0">
          <p class="caption mb-5">
            {{ dataStore.headerMainCaption.toUpperCase() }}
          </p>
          <h1 class="title mb-4">
            {{ dataStore.headerTitle.toUpperCase() }}
          </h1>
          <p>
            {{ dataStore.hederMainText }}
          </p>
          <div class="container p-0">
            <a href="#" class="btn btn--primary">
              {{ dataStore.headerMainBtn.toLocaleUpperCase() }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataStore } from "../../stores/store";
export default {
  name: "infoContainer",
  data() {
    return {
      dataStore,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../styles/variables.scss";
.hero_header--main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 4;
  background-color: rgb(0, 0, 0);
  color: white;

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
  .container {
    margin-top: $navbar--height;
  }

  .title {
    font-size: 3rem;
    font-weight: bolder;
  }
}
</style>
