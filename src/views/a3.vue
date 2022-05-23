<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Enter the Wu-Tang (36 Chambers) is the debut studio album by American hip
      hop group Wu-Tang Clan, released on November 9, 1993, by Loud Records.
      Recording sessions took place during late 1992 to early 1993 at Firehouse
      Studio in New York City, and the album was produced by the group's de
      facto leader RZA. Its title originates from the martial arts films Enter
      the Dragon (1973) and The 36th Chamber of Shaolin (1978).
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/PBwAxmrE194"
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