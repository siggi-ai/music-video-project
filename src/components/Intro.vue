<template>
    <div>
       <img src="../../public/images/spirale.jpg" alt="Spirale" class="spirale">
    </div>
</template>
<script>
export default {
    name: 'IntroPage',
}
</script>
<style scoped>
body {
}
.spirale {
    rotate: 60dg;
    animation: rotate 2s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(180deg)
  }
}
</style>