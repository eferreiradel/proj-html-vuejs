<template></template>

<script>
import { dataStore } from "./stores/store";
export default {
  name: "App",
  data() {
    return {
      log: dataStore.test,
    };
  },
  mounted() {},
};
</script>

<style scoped></style>
