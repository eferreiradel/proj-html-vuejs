<template>
  <div class="container-fluid main">
    <div class="container p-0">
      <div class="row p-0 justify-content-center p-5">
        <div class="col-9 content p-0">
          <div class="container-caption p-0">
            <span class="caption--light"> Fine dining experience </span>
          </div>
          <div class="container p-0">
            <h1 class="title">the best table in town</h1>
          </div>
          <div class="cotainer p-0 paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur.
            </p>
          </div>
          <div class="container p-0">
            <button @click="scrollToSection('menu')" class="btn btn--dark">
              explore the menu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoColumn",
  data() {
    return {};
  },
  methods: {
    scrollToSection(section) {
      const target = document.querySelector(`#${section}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../../styles/variables.scss";
.main {
  display: flex;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
