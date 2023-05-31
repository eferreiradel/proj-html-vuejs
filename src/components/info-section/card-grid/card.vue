<template>
  <!-- card -->
  <div class="card--container p-0">
    <div class="col-4 p-5" v-for="card in cards">
      <div class="container p-0 justify-content-center">
        <img :src="card.image" class="w-100" />
      </div>
      <div class="container p-4 text-center">
        <h4 class="subtitle">{{ card.title.toUpperCase() }}</h4>
      </div>
      <div class="container p-2 text-center">
        <p class="mb-0">{{ card.description }}</p>
      </div>
      <div class="container p-4 text-center">
        <a class="button btn--light">{{ card.buttonText.toUpperCase() }}</a>
      </div>
    </div>
  </div>
</template>
<script>
// import images from "../../../assets/images/miscellaneous/sushi";
export default {
  name: "card",
  data() {
    return {
      cards: [
        {
          image: "../../../assets/images/miscellaneous/sushi/sushi-1.png",
          title: "the best tables in town",
          description:
            "As you take your seat, you are presented with an exquisite menu, a masterpiece crafted by our visionary chef. ",
          buttonText: "make a reservation",
        },
        {
          image: "../../../assets/images/miscellaneous/sushi/sushi-2.png",
          title: "the best tables in town",
          description:
            "Whether you are seeking a romantic dinner for two or an elegant venue for a special occasion",
          buttonText: "explore the menu",
        },
        {
          image: "../../../assets/images/miscellaneous/sushi/sushi-3.png",
          title: "fresh produce everyday",
          description: `We invite you to embark on a culinary adventure and discover the world of Avada Restaurant`,
          buttonText: "learn more about us",
        },
      ],
    };
  },
  computed: {},
};
</script>
<style scoped lang="scss">
.card--container {
  display: flex;
}
img {
  width: 50%;
}
</style>
