<template>
  <div>
    <div class="container">
      <SpinningCircle />
      <p class="text">A</p>
    </div>
    <div>
      
    </div>
    
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
.container {
  display: flex;
}
.text {
  color: white;
  flex-direction: row;
  width: 300px;
  margin-top: 140px;
  margin-left: 30px;
}
</style>
