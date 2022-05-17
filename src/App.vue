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
  background-color: rgb(16, 244, 77);
  width: 100%;
  height: 100%;
}
</style>
