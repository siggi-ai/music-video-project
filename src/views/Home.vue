<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <div class="container">
      <SpinningCircle />
      <p class="text">Music-Website</p>
    </div>

    <div class="album-cover">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="../../public/images/Albumcover/a1.jpg"
              alt="Avatar"
              style="width: 200px; height: 200px"
            />
          </div>
          <div class="flip-card-back">
            <table class="card">
              <router-link to="/a1" class="link">
                <tr>
                  <h2>Edie Brickell & New Bohemians</h2>
                </tr>
                <tr>
                  <h2>Shooting Rubberbands at the Stars</h2>
                </tr>
                <tr>
                  <h2>1988</h2>
                </tr></router-link>
            </table>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="../../public/images/Albumcover/a2.jpg"
              alt="Avatar"
              style="width: 200px; height: 200px"
            />
          </div>
          <div class="flip-card-back">
            <table>
                <router-link to="/a2" class="link">
              <tr>
                <h2>The Rolling Stones</h2>
              </tr>
              <tr>
                <h2>Some Girls</h2>
              </tr>
              <br />
              <tr>
                <h2>1978</h2>
              </tr></router-link>
            </table>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="../../public/images/Albumcover/a3.jpg"
              alt="Avatar"
              style="width: 200px; height: 200px"
            />
          </div>
          <div class="flip-card-back">
            <table>
                <router-link to="/a3" class="link">
              <tr>
                <h2>50 Cent</h2>
              </tr>
              <tr>
                <h2>Get Rich or Die Tryin'</h2>
              </tr>
              <br />
              <tr>
                <h2>2003</h2>
              </tr></router-link>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpinningCircle from "../components/SpinningCircle.vue";

export default {
  name: "HomeView",
  components: {
    SpinningCircle,
  },
};
</script>

<style>
body {
  background-image: url("../../public/images/sp1.jpg");
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  margin-bottom: 20px;
  margin-top: -65px;
}
.text {
  color: #29d0a7;
  font-family: "Koulen", cursive;
  font-size: 30px;
  width: 300px;
  margin-top: 70px;
  margin-left: 30px;
}
.album-cover {
  margin-left: 0px;
  display: flex;
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
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 87%;
  height: 85%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #29d0a7;
  color: white;
  transform: rotateY(180deg);
  font-family: "Macondo", cursive;
  font-size: 10px;
  padding: 15px;
}
.link {
    text-decoration: none;
    margin-left: 0 auto;
}
</style>