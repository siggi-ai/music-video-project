<template>
    <div>
        <div>
            <img src="../../public/images/sp2.jpg" alt="Spirale" class="spirale">
        </div>
    </div>
</template>
<script>
export default {
    name: 'IntroPage',
}
</script>
<style>
.spirale {
    rotate: 60dg;
    animation: rotate 12s linear infinite;
    width: 2500px;
    height: 1800px;
    margin-left: -500px;
    margin-top: -500px;
    z-index: 1;
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