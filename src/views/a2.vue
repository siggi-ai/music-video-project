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
    src="https://www.youtube.com/embed/ptDz5BwAgXQ"
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
iframe {
  border: 10px solid #ffc800;
  border-radius: 4px;
}
@media only screen and (max-width: 800px) {
  p {
    width: 280px;
    margin-left: 30px;
  }
    iframe {
      width: 300px;
      height: 200px;
      margin-left: 40px;
    }
    
}
</style>