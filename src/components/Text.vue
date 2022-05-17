<template>
  <div>
    <img class="hole" src="../../public/images/hole.png" alt="" />
  </div>
  <div>
    <img src="../../public/images/sp2.jpg" alt="Spirale" class="spirale" />
  </div>
</template>
<script>
export default {
  name: "TitleText",
};
</script>
<style>
.hole {
  z-index: 3;
  position: absolute;
}
.spirale {
  rotate: 60dg;
  animation: rotate 12s linear infinite;
  width: 2500px;
  height: 1800px;
  margin-left: -500px;
  margin-top: -500px;
  z-index: 1;
  position: absolute;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>

