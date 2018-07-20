<template>
  <div id="app">
    <router-view/>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;
}
body {
  background-image: URL("/background.jpg");
  background-size: cover;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0px;
  background-color: rgba(255, 255, 255, 0.5);
}
.box {
  width: 80%;
  min-height: 800px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.home {
  display: flex;
  justify-content: center;
}
</style>
