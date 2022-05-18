<template>
  <div>
    <img class="hole" src="../../public/images/sp2-circ.png" alt="candy-circle" />
  </div>
</template>
<script>
export default {
  name: "SpinningCircle",
};
</script>
<style>
.hole {
 animation: rotate 20s linear infinite;
 height: 100px;
 width: 100px;
 margin-left: 100px;
 margin-top: 50px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

