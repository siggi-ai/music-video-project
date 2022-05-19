<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Some Girls is an album by the English rock band the Rolling Stones,
      released on 9 June 1978 by Rolling Stones Records. By 1976, the Rolling
      Stones' popularity was in decline as the music industry was dominated by
      disco and newer rock bands. In addition, the punk rock movement was an
      emerging cultural force in the UK.
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/hic-dnps6MU"
  >
  </iframe>
</template>
<script>
export default {
  name: "AlbumOne",
};
</script>
<style scoped>
p {
  font-size: 20px;
  color: white;
  font-family: "Macondo", cursive;
  margin-top: -20px;
  background-color: black;
  padding: 22px;
  width: 483px;
}
@media only screen and (max-width: 800px) {
  p {
    width: 300px;
    margin-left: 50px;
  }
    iframe {
      width: 350px;
      height: 200px;
      margin-left: 50px;
    }
}
</style>