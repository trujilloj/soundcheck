<template>
    <div>
        <Header />
        <Login v-show="displayLogin" :switchSignup="switchSignup" :signup="signup" :submitLogin="submitLogin" :loginData="loginData" :displayLogin="displayLogin" :toggleDisplay="toggleDisplay"/>
        <div class="home" v-show="!displayLogin">
          <div class="box">
            <button class="btn btn-success cardSpacing" @click.prevent="showMatches = !showMatches">View Upcoming Matches</button>
          <section id="myMatches" class="cardSpacing" v-show="showMatches">
            <Requests v-for="match in myRequests" :key="match.id" :match="match"/>
          </section>
          <button class="btn btn-success cardSpacing" @click.prevent="displayForm = true">Make a New Request</button>
          <RequestForm v-show="displayForm" :borrowerInfo="borrowerInfo" />
          </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import Search from "@/components/Search.vue";
import RequestCard from "@/components/RequestCard.vue";
import LenderForm from "@/components/LenderForm.vue";
import Requests from "@/components/Requests.vue";
import RequestForm from "@/components/RequestForm.vue";

export default {
  components: {
    Header,
    Footer,
    Login,
    Search,
    RequestCard,
    LenderForm,
    Requests,
    RequestForm
  },
  data() {
    return {
      loginData: {
        userName: "",
        password: ""
      },
      signup: false,
      searchProperties: {
        searchQuery: {
          city: "",
          zip: ""
        },
        searchSuccess: false,
        searchMessage: "",
        searchResults: []
      },
      requestId: "",
      borrowerInfo: {
        lenderEmail: "",
        lenderZip: "",
        lenderCity: "",
        lenderName: "",
        lenderGear: "",
        lenderPhone: "",
        lenderState: "",
        lenderStreet: "",
        request: {
          _id: null
        }
      },
      displayLender: false,
      selectedRequest: {},
      displayLogin: true,
      API: {
        REQUESTS: "https://gentle-waters-19521.herokuapp.com/requests/",
        LENDERS: "https://gentle-waters-19521.herokuapp.com/lenders/"
      },
      requestList: [],
      lenderList: [],
      myRequests: [],
      showMatches: false,
      displayForm: false
    };
  },
  methods: {
    findMatches() {
      this.myRequests = [];
      return this.requestList.filter(match => {
        if (
          match.borrowerEmail.toLowerCase() ==
          this.loginData.userName.toLowerCase()
        ) {
          this.myRequests.push(match);
        }
      });
    },
    submitLogin() {
      if (this.loginData.userName && this.loginData.password) {
        console.log(this.loginData.userName);
        this.toggleDisplay();
        this.findMatches();
      } else {
        alert("Please Enter your User Name and Password");
      }
    },
    switchSignup() {
      this.signup = !this.signup;
    },
    enterInfo(id, borrower) {
      this.displayLender = !this.displayLender;
      this.requestId = id;
      this.selectedRequest = borrower;
    },
    toggleDisplay() {
      this.displayLogin = !this.displayLogin;
    }
  },
  async mounted() {
    fetch(this.API.REQUESTS)
      .then(res => res.json())
      .then(res => {
        this.requestList = res;
      });
    fetch(this.API.LENDERS)
      .then(res => res.json())
      .then(res => {
        this.lenderList = res;
      });
  }
};
</script>

<style scoped>
.requestList {
  width: 100%;
  margin: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cardSpacing {
  margin: 0.5%;
}
#myMatches {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
</style>