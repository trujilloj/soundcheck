<template>
  <div id="app">
    <img v-show="splashSeen" class="loadOnce" src="../public/backline_once.gif" @click="switchSplash">
    <router-view v-show="!splashSeen"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      splashSeen: false
    };
  },
  methods: {
    switchSplash() {
      this.splashSeen = true;
    }
  }
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;
  line-height: 1.8rem;
}
body {
  background-image: URL("/background.jpg");
  background-size: cover;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0px;
}
.box {
  width: 60%;
  min-height: 800px;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.25);
  color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 1%;
}
.home {
  display: flex;
  justify-content: center;
}
h4 {
  font-weight: bold;
}
</style>
