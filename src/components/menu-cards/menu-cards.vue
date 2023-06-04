<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="container-fluid">
          <div class="row p-0 py-5">
            <div class="col-4 menu--card p-5" v-for="menuSection in menu">
              <div class="container p-2">
                <div class="container d-flex flex-column p-0">
                  <span class="heading p-0 mb-5">
                    {{ menuSection.header.toUpperCase() }}
                  </span>
                  <div
                    class="container p-0"
                    v-for="item in menuSection.items"
                    :key="item.item"
                  >
                    <div
                      class="container p-0 mb-2 menu--item d-flex justify-content-between align-items-baseline"
                    >
                      <span class="menu--item">{{ item.item }}</span>
                      <span class="pricetag"> ${{ item.price }} </span>
                    </div>
                    <div class="container p-0">
                      <p class="paragraph mb-5">{{ item.description }}</p>
                    </div>
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
import { menuItems } from "../../stores/menu.store";

export default {
  name: "menuCards",
  data() {
    return {
      menu: menuItems.menu,
    };
  },
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.menu--card {
  background-color: $color-tertiary;
  .heading {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bolder;
    color: black;
    font-size: 2rem;
  }
  .menu--item {
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .paragraph {
    color: rgba(0, 0, 0, 0.511);
  }
  .pricetag {
    color: black;
    font-size: small;
    font-weight: lighter;
  }
}
.menu--card:nth-child(even) {
  @import "../../styles/variables.scss";
  .heading {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bolder;
    color: $color-secondary;
    font-size: 2rem;
  }
  .paragraph {
    color: $color-secondary;
  }
  .pricetag {
    color: $color-secondary;
    font-size: small;
    font-weight: lighter;
  }
  color: $color-secondary;
  background: linear-gradient(
      180deg,
      rgb(0, 0, 0) 0%,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.44) 100%
    ),
    url(../../assets/images/poster-images/misc22x.jpg);
  background-size: cover;
  transform: translateY(-30px);
}
</style>
