<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Bad is the seventh studio album by the American singer and songwriter
      Michael Jackson. It was released on August 31, 1987, by Epic Records,
      nearly five years after Jackson's previous album, Thriller (1982). Lyrical
      themes on the album include media bias, paranoia, racial profiling,
      romance, self-improvement, and world peace. The album features appearances
      from Siedah Garrett and Stevie Wonder.
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/yUi_S6YWjZw"
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