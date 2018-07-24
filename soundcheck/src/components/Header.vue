<template>
<nav class="navbar navbar-inverse navbar-fixed-top navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/">
        <div class="title">
          <img class="logo" src="whitelogo.png" alt="soundcheck">
          <h1>soundcheck</h1>
        </div>
      </router-link>
    </div>
    <div class="rightMenu">
      <router-link to="/Borrow">Borrow</router-link>
      <div>|</div>
      <router-link to="/Lend">Lend</router-link>
      <div>|</div>
      <router-link to="/About">About</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  color: white;
}
.rightMenu {
  display: flex;
  justify-content: space-around;
  width: 25%;
  align-items: center;
}
.logo {
  max-width: auto;
  max-height: 80px;
  margin-right: 3%;
}

nav {
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1%;
  max-height: 100px;
  width: 100%;
  margin-top: 0;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  font-size: 3.1rem;
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: lightgray;
}

a {
  margin-left: 12px;
  letter-spacing: 0.3em;
  color: white;
}
</style>