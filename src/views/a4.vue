<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Love Sux is the seventh studio album by Canadian singer-songwriter Avril Lavigne, released on February 25, 2022.
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/ciqUEV9F0OY"
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