<template>
<link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
      <p>Shooting Rubberbands at the Stars is the debut album by the American
    alternative rock band Edie Brickell & New Bohemians, released in 1988. The
    album went 2× platinum in the United States. "What I Am" was the lead single
    and big hit from the album.</p>
  </div>
  <iframe width="520" height="300" src="https://www.youtube.com/embed/tDl3bdE3YQA">
</iframe>
</template>
<script>
export default {
    name: "AlbumOne",
}
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