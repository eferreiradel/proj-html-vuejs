<template>
  <div class="main text-white p-0">
    <div class="image-container p-0">
      <img src="../../../assets/images/poster-images/info52x.jpg" />
    </div>
    <div class="row justify-content-center content-container p-0">
      <div class="col-8 d-flex flex-column info-container p-0">
        <p class="caption mb-5">{{ cardLeftStore.author }}</p>
        <h2 class="title mb-4">{{ cardLeftStore.mainCaption }}</h2>
        <div class="container votes">
          <i
            v-for="index in votes.theGuardian"
            :key="index"
            class="fas fa-star"
          ></i>
        </div>
        <div class="line-thin-short my-5"></div>
        <p class="mb-5">{{ cardLeftStore.paragraph }}</p>
        <div class="container p-0">
          <a href="#" class="btn btn--transparent">
            {{ cardLeftStore.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cardLeftStore } from "../../../stores/components-store";
import { votes } from "../../../stores/components-store";
export default {
  name: "cardLeft",
  data() {
    return {
      cardLeftStore,
      votes,
    };
  },
};
</script>
<style scoped lang="scss">
main {
  border: 2px solid green;
  width: 100%;
  position: relative;
}
.content-container {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.7637648809523809) 49%
  );

  height: 100%;
  position: absolute;
  top: 0;
}
.image-container {
  position: relative;
  height: 35rem;
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
