<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      The Razors Edge is the twelfth studio album by Australian hard rock band
      AC/DC released on 21 September 1990. It was a major comeback for the band,
      featuring the hits "Thunderstruck" and "Are You Ready", which reached #5
      and #16 respectively on Billboard's Mainstream Rock Tracks Chart, and
      "Moneytalks", which peaked at #23 on the Billboard Hot 100.
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/v2AC41dglnM"
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