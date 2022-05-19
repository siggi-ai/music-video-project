<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&display=swap"
    rel="stylesheet"
  />
  <div>
    <p>
      Supa Dupa Fly is the debut studio album by American rapper Missy
      "Misdemeanor" Elliott, released July 15, 1997, on The Goldmind and Elektra
      Records. The album was recorded and produced solely by Timbaland in
      October 1996, and features the singles, "The Rain (Supa Dupa Fly)", "Sock
      It 2 Me", "Hit Em wit da Hee" and "Beep Me 911".
    </p>
  </div>
  <iframe
    width="550"
    height="300"
    src="https://www.youtube.com/embed/9UvBX3REqSY"
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