<template>
  <div class="container main ps-0 pe-4">
    <div class="container img-container p-0">
      <img src="../../../assets/images/poster-images/info52x.jpg" alt="" />
      <div class="card-container">
        <div class="col-11 content p-5">
          <div class="container p-0">
            <span class="caption text-white"> meggy stewart </span>
          </div>
          <div class="container p-0">
            <h1 class="subtitle">the global</h1>
          </div>
          <div class="votes-container">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
          </div>
          <div class="line-thin my-4"></div>
          <div class="container p-0 paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur.
            </p>
          </div>
          <div class="container p-0">
            <button class="btn btn--dark">read full article</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardLeft",
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
@import "../../../styles/variables.scss";

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.img-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 37rem;
  object-fit: cover;
  object-position: top;
  transition: opacity 0.3s ease;
}

//.img-container:hover .card-container {
// opacity: 1;
//}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.votes-container {
  color: white;
  display: flex;
  gap: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
