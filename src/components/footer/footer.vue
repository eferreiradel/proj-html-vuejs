<template>
  <div class="container-fluid main">
    <div class="shade"></div>
    <div class="row justify-content-center">
      <div class="col-5 content p-0">
        <div class="container p-0 d-flex justify-content-center">
          <img src="../../assets/images/logo/logo-restaurant.png" alt="" />
        </div>
        <div class="container p-0 text-center py-5 text-white">
          <p class="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            sunt quia accusamus doloribus nam doloremque, molestiae voluptatem
            facilis voluptatum
          </p>
        </div>
        <div class="icon--row p-0 gap-5 d-flex justify-content-center">
          <a class="icon--container text-black" v-for="icon in icons">
            <i :class="icon.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footerSection",
  data() {
    return {
      icons: [
        {
          icon: "fa-brands fa-facebook-f",
        },
        {
          icon: "fa-brands fa-twitter",
        },
        {
          icon: "fa-brands fa-youtube",
        },
        {
          icon: "fa-brands fa-instagram",
        },
        {
          icon: "fa-brands fa-linkedin-in",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../styles/variables.scss";
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  height: 45rem;
  background: linear-gradient(
      180deg,
      rgb(0, 0, 0) 0%,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.44) 100%
    ),
    url(../../assets/images/jumbo-slider/slider52x.jpg);
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon--container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: $color-secondary;
}
</style>
