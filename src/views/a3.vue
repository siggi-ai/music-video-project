<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Get Rich or Die Tryin' is the debut studio album by American rapper 50
      Cent. In 2020, Rolling Stone ranked the album number 280 on their updated
      500 Greatest Albums of All Time list.
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/5D3crqpClPY"
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