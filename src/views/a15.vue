<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Red Velvet (Korean: 레드벨벳; RR: Redeubelbet) is a South Korean girl
      group. Musically, the work of Red Velvet reflects their own group name:
      their predominantly-pop "red" side experiments occasionally with
      electronic, funk and hip hop, while their "velvet" side focuses on
      '90s-influenced R&B with elements of ballad and jazz. Their genre
      versatility and hooks have garnered critical praise.
    </p>
  </div>
  <iframe
    width="520"
    height="300"
    src="https://www.youtube.com/embed/R9At2ICm4LQ"
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