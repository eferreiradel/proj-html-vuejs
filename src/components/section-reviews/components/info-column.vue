<template>
  <div class="container-fluid main">
    <div class="container">
      <div class="row p-0 justify-content-center p-5">
        <div class="col-11 content p-0">
          <div class="container p-0">
            <span class="caption--light"> meggy stewart </span>
          </div>
          <div class="container p-0">
            <span class="subtitle--light">NEW YORK TIMES</span>
          </div>
          <div class="votes-container">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i clsass="fa fa-solid fa-star"></i>
          </div>
          <div class="line-thin my-4"></div>
          <div class="cotainer p-0 paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur.
            </p>
          </div>
          <div class="container p-0">
            <button class="btn btn--dark">read full article</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoColumn",
  props: {
    votes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
@import "../../../styles/variables.scss";
.main {
  background-color: black;
  display: flex;
}
.votes-container {
  color: white;
  display: flex;
  gap: 1rem;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
