<template>

<link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"> 

  <div>
    <div class="container">
      <SpinningCircle />
      <p class="text">Music-Website</p>
    </div> 
  <div class="album-cover">
    <a><img class="cover" src="../public/images/Albumcover/a1.jpg" alt="album-cover"></a>
    <img class="cover" src="../public/images/Albumcover/a2.jpg" alt="album-cover">
    <img class="cover" src="../public/images/Albumcover/a3.jpg" alt="album-cover">

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
.album-cover {
  margin-left: 220px;

}
.cover {
  width: 200px;
  height: 200px;
}
</style>
