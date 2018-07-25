<template>
    <div>
        <Header />
            <Login v-show="displayLogin" :switchSignup="switchSignup" :signup="signup" :submitLogin="submitLogin" :loginData="loginData" :displayLogin="displayLogin" :toggleDisplay="toggleDisplay"/>
        <div class="home" v-show="!displayLogin">
            <div class="box ">
                <AccountDetails />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import AccountDetails from "@/components/AccountDetails.vue";

export default {
components: {
    Header,
    Footer,
    Login,
    AccountDetails
},
data () {
    return {
    loginData: {
        userName: "",
        password: ""
        },
    displayLogin: true,
    signup: false
    }
},
methods: {
switchSignup() {
    this.signup = !this.signup;
},
submitLogin() {
    if (this.loginData.userName && this.loginData.password) {
        this.toggleDisplay();
    } else {
        alert("Please Enter your User Name and Password");
}
},
toggleDisplay() {
    this.displayLogin = !this.displayLogin;
}
}
};
</script>

<style>
.loadOnce {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
.homeLogo {
  max-width: 90%;
  height: auto;
  opacity: 0.9;
}
#whatIs {
  font-size: 2rem;
  width: 90%;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 1.5%;
  margin-top: 1%;
  text-align: justify;
  padding: 1%;
  line-height: 1.8rem;
}
</style>