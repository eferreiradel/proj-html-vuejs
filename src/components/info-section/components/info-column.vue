<template>
  <div class="container-fluid main">
    <div class="container">
      <div class="row p-0 justify-content-center p-0">
        <div class="col-12 content py-3">
          <div class="container p-0">
            <p class="">
              To complement your culinary journey, our knowledgeable staff will
              guide you through an extensive sake menu, featuring an exquisite
              collection of traditional and rare sake varieties. From crisp and
              refreshing Junmai
            </p>
          </div>
          <div class="container p-0">
            <h2 class="subtitle--dark text-black">
              food is our common ground, a universal experience
            </h2>
          </div>
          <div class="cotainer p-0 paragraph">
            <p class="text-black">
              Immerse yourself in the serene ambiance of our elegant dining
              space, adorned with cherry blossom
            </p>
          </div>
          <div class="container p-0">
            <img
              src="../../../assets/images/miscellaneous/signature.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoColumn",
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
@import "../../../styles/variables.scss";
.main {
  display: flex;
}
img {
  width: 35%;
  mix-blend-mode: multiply;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
