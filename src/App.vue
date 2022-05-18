<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
    rel="stylesheet"
  />

  <div>
    <div class="container">
      <SpinningCircle />
      <p class="text">Music-Website</p>
    </div>
    <div class="album-cover">
      <a
        ><img
          class="cover"
          src="../public/images/Albumcover/a1.jpg"
          alt="album-cover"
      /></a>
      <img
        class="cover"
        src="../public/images/Albumcover/a2.jpg"
        alt="album-cover"
      />
      <img
        class="cover"
        src="../public/images/Albumcover/a3.jpg"
        alt="album-cover"
      />

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="../public/images/Albumcover/a1.jpg"
              alt="Avatar"
              style="width: 200px; height: 200px"
            />
          </div>
          <div class="flip-card-back">
            <h1>Edie Brickell & New Bohemians</h1>
            <p>Shooting Rubberbands at the Stars</p>
            <p>1988</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import SpinningCircle from "./components/SpinningCircle.vue";

export default {
  name: "App",
  components: {
    SpinningCircle,
  },
};
</script>

<style>
body {
  background-image: url("../public/images/black-bg-2.png");
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
}
.text {
  color: #29d0a7;
  font-family: "Koulen", cursive;
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
.flip-card {
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
