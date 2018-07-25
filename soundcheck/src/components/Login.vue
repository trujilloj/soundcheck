<template>
  <div class="home">
    <div class="box">
      <h1 v-show="!signup">Login</h1>
      <form  v-show="!signup" class="requestForm" :submitRequest="submitLogin" v-on:submit.prevent="submitLogin">
        <input v-model="loginData.userName" class="form-control mb-2 mr-sm-2" type="text" name="userName"    placeholder="Username">
        <input  v-model="loginData.password" class="form-control mb-2 mr-sm-2" type="password" name="password" placeholder="Password">
        <input class="btn btn-success loginButton buttons" type="submit" name="submit" value="Login" @click.prevent="submitLogin"/>
      </form>
      <h4 v-show="!signup">Don't have an account?</h4>
      <button v-show="!signup" @click.prevent="switchSignup" class="btn btn-success buttons">Sign Up Now</button>
      <h1 v-show="signup">Create a Username and Password</h1>
      <div class="eula" v-show="signup">End-User License Agreement for Soundcheck

        This End-User License Agreement (EULA) is a legal agreement between you (either an individual or a single entity) and the mentioned author (EdrawSoft.COM) of this Software for the software product identified above, which includes computer software and may include associated media, printed materials, and “online” or electronic documentation (“SOFTWARE PRODUCT”).

        By installing, copying, or otherwise using the SOFTWARE PRODUCT, you agree to be bounded by the terms of this EULA.
        If you do not agree to the terms of this EULA, do not install or use the SOFTWARE PRODUCT.
      </div>
      <form  v-show="signup" class="signupForm" v-on:submit.prevent="switchSignup">
        <input v-model="loginData.userName" class="form-control mb-2 mr-sm-2" type="text" name="userName"    placeholder="Username">
        <input  v-model="loginData.password" class="form-control mb-2 mr-sm-2" type="password" name="password" placeholder="Password">
        <input class="btn btn-success loginButton" type="submit" name="submit" value="Sign Up" @click.prevent="switchSignup"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "displayLogin",
    "toggleDisplay",
    "loginData",
    "submitLogin",
    "signup",
    "switchSignup"
  ],

  methods: {}
};
</script>

<style scoped>
.requestForm {
  width: 30%;
}
.buttons {
  margin-bottom: 1%;
}
.eula {
  overflow: auto;
  height: 120px;
  background-color: grey;
  margin-bottom: 2%;
}
</style>