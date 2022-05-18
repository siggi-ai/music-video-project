<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
      rel="stylesheet"
    />
    <div class="top-box">
      <div class="top-content">
        <strong class="date"
          >Datum - {{ currentDate() }} &nbsp;&nbsp; Uhrzeit -
          {{ localTime }}</strong
        >
        <br />
        <br />
        <router-link to="/" class="menu-bar">home</router-link>
        <router-link to="/a1" class="menu-bar">a1</router-link>
        <br />
        <br />
        <br />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: function () {
    return {
      localTime: " ",
    };
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date =
        current.getDate() +
        "." +
        (current.getMonth() + 1) +
        "." +
        current.getFullYear();
      return date;
    },
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
        time.localTime = new Date().toLocaleTimeString();
      }, 1000);
    },
  },
  mounted() {
    this.showLocaleTime();
  },
};
</script>

<style>
.menu-bar {
  text-align: center;
  margin-left: 0 auto;
  padding: 16px;
  font-size: 1rem;
  margin: 0 auto;
  width: 500px;
  font-family: "Julius Sans One", sans-serif;
  color: #00ff89;
  text-decoration: none;
}
.picture-link {
  text-align: center;
  margin-left: 0 auto;
  padding: 16px;
  font-size: 1rem;
  margin: 0 auto;
  width: 500px;
  font-family: "Julius Sans One", sans-serif;
  color: #00ff89;
  text-decoration: none;
}
.text {
  font-family: "Julius Sans One", sans-serif;
  color: white;
}

a {
  color: white;
}

body {
  height: 500px;
  margin: 0 auto;
  padding: 40px;
  background-size: 200% 200%;
  animation: gradient 55s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.date {
  font-family: "Bungee Hairline";
  font-size: 24.7px;
  font-weight: bolder;
  color: gray;
}

.top-box {
  margin: 0 auto;
  width: 586px;
}

.top-content {
  margin: 0 auto;
  width: 690px;
}

.vue-logo {
  width: auto;
  height: 65px;
  margin-top: 120px;
  animation: fade 8s infinite;
}
@keyframes fade {
  10% {
    opacity: 0.7;
  }
  20% {
    opacity: 1;
  }
}

.three-logos {
  width: auto;
  height: 75px;
  margin-left: 507px;
  margin-top: 111px;
  animation: fade 8s infinite;
}

.all-logos {
  display: flex;
  margin-top: -275px;
  margin-left: 210px;
}

@media screen and (max-width: 680px) {
  .menu-bar {
    text-align: center;
    margin-left: 0 auto;
    padding: 5px;
    font-size: 1rem;
    margin: 0 auto;
    width: 500px;
    color: #00ff89;
  }

  .self-description-text {
    color: #00ff89;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 100px;
    margin-top: 10px;
    width: 200px;
  }
  .rightbox {
    display: flex;
    margin-left: 80px;
    margin-top: 70px;
  }
  .three-logos {
    width: auto;
    height: 75px;
    margin-left: -200px;
    margin-top: -10px;
  }
  .vue-logo {
    width: auto;
    height: 65px;
    margin-top: 0px;
  }
  .date {
    font-size: 16px;
  }
  .menu-bar {
    padding: 8px;
    font-size: 0.6rem;
  }
  .picture-link {
    display: none;
  }
}
</style>
