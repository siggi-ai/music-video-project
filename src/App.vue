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
  background-color: #000;
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
}
.text {
  color: white;
  font-family: 'Koulen', cursive;
  font-size: 25px;
  width: 300px;
  margin-top: 130px;
  margin-left: 30px;
}
</style>
