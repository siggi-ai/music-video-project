<template>
  <div>
    <Text />
    <Intro />
  </div>
</template>

<script>
import Text from "./components/Text.vue";
import Intro from "./components/Intro.vue";

export default {
  name: "App",
  components: {
    
    Intro,
    Text,
  },
};
</script>

<style>
body {
  background-image: url("../public/images/spirale.jpg");
  width: 100%;
  height: 100%;
  /* animation: rotate 12s linear infinite; */
}
/* @keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(180deg)
  }
} */
</style>
