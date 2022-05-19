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
        <br />
        <br />
        <router-link to="/" class="menu-bar">home</router-link>
        <!-- <router-link to="/a1" class="menu-bar">a1</router-link> -->
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
};
</script>

<style scoped>
.menu-bar {
    text-align: center;
    margin-left: 0 auto;
    margin-top: 37px;
    padding: 16px;
    font-size: 2rem;
    margin: 0 auto;
    width: 500px;
    font-family: 'Koulen';
    color: #ffc800;
    text-decoration: none;
}

a {
  color: rgb(75, 5, 237);
  text-decoration: wavy;
}

body {
  margin: 0 auto;
}

.top-box {
  margin: 0 auto;
  width: 586px;
}

.top-content {
  margin: 0 auto;
  width: 690px;
}

@media screen and (max-width: 800px) {
  .menu-bar {
    margin-left: 50px;
  }
}
</style>
