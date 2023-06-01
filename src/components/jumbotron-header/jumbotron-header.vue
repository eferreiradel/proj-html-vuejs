<template>
  <nav-bar :navItems="navItems"></nav-bar>
  <div class="container-fluid main">
    <div class="row">
      <div class="col-5 column-left p-0">
        <info-column></info-column>
      </div>
      <div class="col-7">
        <hero></hero>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "./components/navbar.vue";
import { jumbotronHeaderStore } from "../../stores/jumbotron-header-store";
import infoColumn from "./components/info-column.vue";
import hero from "./components/hero.vue";
export default {
  name: "jumbotronHeader",
  data() {
    return {
      jumbotronHeaderStore,
      navItems: jumbotronHeaderStore.navItems,
    };
  },
  components: {
    navBar,
    infoColumn,
    hero,
  },
};
</script>
<style scoped lang="scss">
.column-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main {
  width: 100%;
  padding: 0;
  background-color: rgb(0, 0, 0);
}
</style>
