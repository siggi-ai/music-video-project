<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Ill Communication is the fourth studio album by American hip-hop group
      Beastie Boys, released by Grand Royal Records on May 31, 1994. Co-produced
      by Beastie Boys and Mario Caldato, Jr., it is among the band's most varied
      releases, drawing from hip hop, punk rock, jazz, and funk, and continues
      their trend away from sampling and towards live instruments, which began
      with their previous release.
    </p>
  </div>
  <iframe
    width="520"
    height="300"
    src="https://www.youtube.com/embed/JhqyZeUlE8U"
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