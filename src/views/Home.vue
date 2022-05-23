<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <div class="container">
      <SpinningCircle />
      <p class="text">Music-Website</p>
      <p class="text2">Explore Sounds</p>
    </div>

    <div class="scroll-container">
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
                </router-link>
              </table>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a12.png"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a12" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coldplay</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&Y</h2>
                  </tr>
                  <br />
                </router-link>
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
                    <h2>Wu-Tang Clan</h2>
                  </tr>
                  <tr>
                    <h2>Enter the Wu-Tang (36 Chambers)</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="album-cover">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a4.png"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table class="card">
                <router-link to="/a4" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Avril Lavigne</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Love Sux</h2>
                  </tr>
                </router-link>
              </table>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a5.png"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a5" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sonic Youth</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;diRty</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a6.jpg"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a6" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanye West</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graduation</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="album-cover">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a7.jpg"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a7" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AC/DC</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Razors Edge</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a8.jpg"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a8" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metallica</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metallica</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a9.jpg"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a9" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missy Elliot</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;Supa Dupa Fly</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="album-cover">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a10.png"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a10" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;Michael Jackson</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;Bad</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a11.jpeg"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a11" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;Wilson Phillips</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;Wilson Phillips</h2>
                  </tr>
                  <br />
                </router-link>
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
                    <h2>&nbsp;&nbsp;The Rolling Stones</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;Some Girls</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
          </div>
        </div>

      </div>


      <div class="album-cover">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../../public/images/Albumcover/a13.jpg"
                alt="Avatar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <table>
                <router-link to="/a13" class="link">
                  <tr>
                    <h2>&nbsp;&nbsp;&nbsp;Beasty Boys</h2>
                  </tr>
                  <tr>
                    <h2>&nbsp;&nbsp;Ill Communication</h2>
                  </tr>
                  <br />
                </router-link>
              </table>
            </div>
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
  background-image: url("../../public/images/black-stripes-1.8.png");
  width: 99%;
  height: 100%;
}
.container {
  display: flex;
  margin-bottom: 20px;
  margin-top: -65px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(210 64 255);
  border-radius: 10px;
}
.text {
  color: #00ffc0;
  font-family: "Koulen", cursive;
  font-size: 56px;
  width: 100%;
  margin-top: -43px;
  margin-left: -8px;
  border-radius: 12px;
}
.text2 {
  color: #94ff00;
  font-family: "Koulen", cursive;
  font-size: 40px;
  width: 100%;
  margin-top: 18px;
  margin-left: -385px;
  border-radius: -8px;
}
.album-cover {
  margin-left: -13px;
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
  width: 85%;
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
  font-size: 12px;
  padding: 15px;
  height: 76%;
  width: 76%;
  border: 10px solid #6d6dff;
}
.link {
  text-decoration: none;
  margin-left: 0 auto;
}

@media only screen and (max-width: 800px) {
  .album-cover {
    flex-direction: column;
    margin-left: 105px;
  }
  .container {
    margin-left: 50px;
  }
  .text {
    margin-top: -35px;
    font-size: 39px;
    margin-left: -1px;
  }
  .text2 {
    font-size: 30px;
  }
  body {
    background-image: url("../../public/images/black-stripes-1.8.png");
    width: 99%;
    height: 100%;
  }
  .top-content {
    margin: 0 auto;
    width: 390px;
  }
  .top-box[data-v-7ba5bd90] {
    margin: 0 auto;
    width: 90%;
  }
}
</style>