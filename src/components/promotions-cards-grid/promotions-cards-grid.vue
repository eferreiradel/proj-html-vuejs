<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 px-0">
          <div class="container-fluid p-0">
            <div class="row card-grid py-0 mx-0">
              <div class="col-4 px-3" v-for="card in cards">
                <div class="img-container">
                  <img :src="card.image" />
                </div>
                <div class="container py-4 text-center">
                  <span class="subheading--dark">
                    {{ card.caption }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import image2 from "../../assets/images/poster-images/blog72x-1200x1375.jpg";
import image1 from "../../assets/images/poster-images/blog92x-1200x1375.jpg";
import image3 from "../../assets/images/poster-images/blog82x-1200x1375.jpg";

export default {
  name: "promotionsCardsGrid",
  data() {
    return {
      cards: [
        {
          caption: "the best coffee in town",
          image: image1,
        },
        {
          caption: "discover our new menu",
          image: image2,
        },
        {
          caption: "we now accept square",
          image: image3,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.img-container {
  height: 30rem;
}
</style>
