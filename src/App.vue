<template>

<link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"> 

  <div>
    <div class="container">
      <SpinningCircle />
      <p class="text">Music-Website</p>
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
  background-image: url('../public/images/black-bg-2.png');
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
}
.text {
  color: #29d0a7;
  font-family: 'Koulen', cursive;
  font-size: 30px;
  width: 300px;
  margin-top: 120px;
  margin-left: 30px;
}
</style>
