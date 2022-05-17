<template>
  <div>
    <img class="hole" src="../../public/images/2hole.png" alt="Hole" />
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
  width: 100%;
  height: 100%;
}
.spirale {
  rotate: 60dg;
  animation: rotate 12s linear infinite;
  width: 300px;
  height: 300px;
  margin-left: 180px;
  margin-top: 80px;
  z-index: 1;
  position: fixed;
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

