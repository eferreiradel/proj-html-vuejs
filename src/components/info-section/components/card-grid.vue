<template>
  <div class="container-fluid p-0">
    <div class="row py-5">
      <div class="col-4 py-5 px-4" v-for="card in cards">
        <div class="ico py-3">
          <img :src="card.img" />
        </div>
        <div class="container text-center py-4">
          <span class="subheading--dark">{{ card.caption }}</span>
        </div>
        <div class="underline--dark my-2"></div>
        <div class="container text-center mt-4">
          <p>
            {{ card.description }}
          </p>
        </div>
        <div class="container py-3 text-center">
          <a class="btn--dark" href="#"> {{ card.btnText }} </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardGrid",
  props: {
    cards: {
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
img {
  width: 25%;
  mix-blend-mode: multiply;
}
</style>
