<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Early albums consist of a cappella music. The band's first name was "Die
      Herzbuben", but it was changed to "Die Prinzen" in 1991 to avoid confusion
      with the Volkstümliche Schlager duo Wildecker Herzbuben. The lyrics of
      their songs are often humorous, tongue-in-cheek critiques of German
      government or society. In reference to the group's
      name and the Brothers Grimm fairy-tale "The Frog Prince", the group's logo
      is a green frog wearing a crown. 
    </p>
  </div>
  <iframe
    width="520"
    height="300"
    src="https://www.youtube.com/embed/R9At2ICm4LQ&list=OLAK5uy_kMj5895MrZHFnuxJmDMyPOET_wL1yexRo&index=1"
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