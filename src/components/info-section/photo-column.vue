<template>
  <div class="img-container p-0">
    <div class="display-price p-2">
      <span>
        {{ menu.californiaRolls.name }} -${{ menu.californiaRolls.price }}
      </span>
    </div>
    <img src="../../assets/images/poster-images/info22x.jpg" class="w-100" />
  </div>
</template>
<script>
import { menu } from "../../stores/store";
export default {
  name: "photoColumn",
  data() {
    return {
      menu,
    };
  },
};
</script>
<style lang="scss">
img {
  height: 100%;
  object-fit: cover;
}
.img-container {
  position: relative;
  .display-price {
    opacity: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: rgba(12, 12, 12, 0.354);
    height: 100%;
    width: 100%;
    transition: opacity 0.2s ease-in;
  }
  .display-price:hover {
    opacity: 1;
  }

  span {
    font-size: smaller;
    color: white;
  }
}
</style>
