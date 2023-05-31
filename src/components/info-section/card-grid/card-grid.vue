<!-- can't load images from relative path using v-for,
  error message: "GET http://localhost:5177/assets/images/miscellaneous/sushi/sushi-1.png 404 (Not Found)"
 -->
<template>
  <div class="container p-0">
    <div class="row py-5">
      <card></card>
    </div>
  </div>
</template>
<script>
import card from "./card.vue";
export default {
  name: "cardGrid",
  data() {
    return {};
  },
  components: {
    card,
  },
};
</script>
<style lang="scss"></style>
