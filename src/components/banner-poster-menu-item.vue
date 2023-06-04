<template>
  <div class="container-fluid px-0">
    <div class="poster-banner mb-0">
      <div class="card-menu--item p-5">
        <div class="container d-flex px-0">
          <span class="subtitle--light w-50">{{ menu[1].items[0].item }} </span>
          <span class="pricetag"> {{ menu[1].items[0].price }}$ </span>
        </div>
        <div class="container flex-column p-0 justify-content-start">
          <div class="underline my-5"></div>
          <div class="cotainer p-0 paragraph">
            <p>
              Where the aroma of freshly prepared sushi fills the air, and the
              meticulous craftsmanship.
            </p>
            <button class="btn--dark my-3">view the menu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { menuItems } from "../stores/menu.store";
export default {
  name: "bannerPosterMenuItem",
  data() {
    return {
      menu: menuItems.menu,
    };
  },
};
</script>
<style scoped lang="scss">
.poster-banner {
  text-transform: none;
  background-image: url(../assets/images/jumbo-slider/hero42x.jpg);
  background-size: cover;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .card-menu--item {
    position: absolute;
    margin-left: 15rem;
    opacity: 1;
    background-color: black;
    flex-grow: 1;
    width: 25rem;
    .container {
      display: flex;
      justify-content: space-between;
    }
    .pricetag {
      display: flex;
      justify-content: space-between;
    }
  }

  .underline {
    background-color: white;
    margin: 0;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
  }
}
</style>
