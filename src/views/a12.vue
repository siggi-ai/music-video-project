<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      X&Y is the third studio album by the British rock band Coldplay. It was
      released on 6 June 2005 by Parlophone in the United Kingdom. The album's cover art is a
      combination of colours and blocks, which is a representation of the Baudot
      code.
    </p>
  </div>
  <iframe
    width="520"
    height="300"
    src="https://www.youtube.com/embed/k4V3Mo61fJM"
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