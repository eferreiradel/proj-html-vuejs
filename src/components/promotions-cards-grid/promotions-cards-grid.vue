<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 px-0">
          <div class="container-fluid p-0">
            <div class="row card-grid py-0 mx-0">
              <div class="col-4 card--container px-3" v-for="card in cards">
                <div class="content--container">
                  <div class="shade">
                    <div class="img-container">
                      <div class="container text-center p-0">
                        <i class="fa-solid fa-link"></i>
                      </div>
                      <a class="subheading--light">{{ card.caption }}</a>
                    </div>
                    <img :src="card.image" />
                  </div>
                  <div class="link--container py-4 text-center">
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
@import "../../styles/variables.scss";

.content--container {
  position: relative;
  height: 40em;
}
.shade {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 1;
  transition: 0.5s;
  i {
    font-size: 1.5rem;
    color: $color-secondary;
  }
}
.card--container {
  &:hover {
    .img-container {
      height: 100%;
    }
    .shade {
      opacity: 1;
    }
  }

  .img-container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 85%;
    transition: height 0.2s ease-in;
  }

  .link--container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
  }
}
</style>
