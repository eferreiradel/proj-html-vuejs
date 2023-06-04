<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center p-0">
      <div class="col-8 p-0">
        <div class="row py-5">
          <div class="col-5 p-0">
            <info-column></info-column>
          </div>
          <div class="col-6 offset-1 p-0">
            <image-poster :menu="menu"></image-poster>
          </div>
        </div>
        <card-grid :cards="cards"></card-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { menu } from "../../stores/menu.store";
import infoColumn from "./components/info-column.vue";
import imagePoster from "./components/image-poster.vue";
import cardGrid from "./components/card-grid.vue";

// images
import sushiImage1 from "../../assets/images/miscellaneous/sushi/sushi-1.png";
import sushiImage2 from "../../assets/images/miscellaneous/sushi/sushi-2.png";
import sushiImage3 from "../../assets/images/miscellaneous/sushi/sushi-3.png";
export default {
  name: "infoSection",
  data() {
    return {
      menu,
      cards: [
        {
          img: sushiImage1,
          caption: "the best table in town",
          description:
            "Immerse yourself in a symphony of flavors with our Ocean's Symphony Roll",
          btnText: "explore the menu",
        },
        {
          img: sushiImage2,
          caption: "perfect for groups",
          description: "Experience pure serenity with our Zen Garden Roll",
          btnText: "make a reservation",
        },
        {
          img: sushiImage3,
          caption: "fresh produce everyday",
          description:
            "We pride ourselves on sourcing the finest ingredients from around the world",
          btnText: "learn more about us",
        },
      ],
    };
  },
  components: {
    infoColumn,
    imagePoster,
    cardGrid,
  },
};
</script>
<style></style>
