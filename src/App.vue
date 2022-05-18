<template>
  <div>
    <SpinningCircle />

  </div>
</template>

<script>
import SpinningCircle from "./components/SpinningCircle.vue";


export default {
  name: "App",
  components: { 
    SpinningCircle
  },
};
</script>

<style>
body {
  background-color: #000;
  width: 100%;
  height: 100%;
}
</style>
