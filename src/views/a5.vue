<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Dirty is the seventh full-length studio album and second double album by
      American rock band Sonic Youth, released on July 21, 1992 by DGC Records.
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/N3gN9Up6hmc"
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