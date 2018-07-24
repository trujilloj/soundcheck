<template>
    <div>
        <Header />
        <Login v-show="displayLogin" :switchSignup="switchSignup" :signup="signup" :submitLogin="submitLogin" :loginData="loginData" :displayLogin="displayLogin" :toggleDisplay="toggleDisplay"/>
        <div class="home" v-show="!displayLogin">
          <div class="box">
            <button class="btn btn-success" @click.prevent="showMatches = !showMatches">View Upcoming Matches</button>
          <section id="myMatches" v-show="showMatches">
            <Matches class="card text-white bg-dark mb-3 cardSpacing" v-for="match in myRequests" :key="match.id" :match="match"/>
          </section>
          <Search :requestList="requestList" :filterRequests="filterRequests" :searchProperties="searchProperties"/>
          <section v-show="!displayLender" class="requestList">
            <RequestCard v-for="borrower in searchProperties.searchResults" :key="borrower.id" class="card text-white bg-dark mb-3 cardSpacing" style="max-width: 20rem;" :borrower="borrower" :requestId="requestId" :fillRequest="fillRequest" :lenderInfo="lenderInfo" :enterInfo="enterInfo"/>
          </section>
          <LenderForm v-show="displayLender" :fillRequest="fillRequest" :lenderInfo="lenderInfo" :API="API" :selectedRequest="selectedRequest"/>
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
import Matches from "@/components/Matches.vue";

export default {
  components: {
    Header,
    Footer,
    Login,
    Search,
    RequestCard,
    LenderForm,
    Matches
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
      lenderInfo: {
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
      showMatches: false
    };
  },
  methods: {
    findMatches () {
      this.myRequests = [];
      return this.lenderList.filter(match => {
        if (match.lenderEmail.toLowerCase() ==
        this.loginData.userName.toLowerCase()) {
          this.myRequests.push(match)
        }
      })
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
    },
    filterRequests() {
      this.searchProperties.searchResults = [];
      this.searchProperties.searchMessage = "";
      this.searchProperties.searchSuccess = false;
      return this.requestList.filter(request => {
        if (this.searchProperties.searchQuery.zip) {
          if (
            request.venueZip == this.searchProperties.searchQuery.zip &&
            (request.lender === null || !request.lender)
          ) {
            this.searchProperties.searchSuccess = true;
            this.searchProperties.searchMessage = "Results Below";
            this.searchProperties.searchResults.push(request);
          } else if (this.searchProperties.searchSuccess === false) {
            this.searchProperties.searchMessage = "No Results Found";
          }
        } else {
          if (
            request.venueCity.toLowerCase() ==
              this.searchProperties.searchQuery.city.toLowerCase() &&
            (request.lender === null || !request.lender)
          ) {
            this.searchProperties.searchSuccess = true;
            this.searchProperties.searchMessage = "Results Below";
            this.searchProperties.searchResults.push(request);
          } else if (this.searchProperties.searchSuccess === false) {
            this.searchProperties.searchMessage = "No Results Found";
          }
        }
      });
    },
    fillRequest() {
      this.lenderInfo.request._id = this.requestId;
      this.postFill();
      // this.lenderInfo = {
      //   lenderEmail: "",
      //   lenderZip: "",
      //   lenderCity: "",
      //   lenderName: "",
      //   lenderGear: "",
      //   lenderPhone: "",
      //   lenderState: "",
      //   lenderStreet: "",
      //   request: {
      //     _id: ""
      //   }
      // };
      this.requestId = "";
      this.selectedRequest = {};
    },
    postFill() {
      const postOptions = {
        method: "POST",
        body: JSON.stringify(this.lenderInfo),
        headers: { "Content-Type": "application/json" }
      };
      fetch(this.API.LENDERS, postOptions)
        .then(res => res.json())
        .then(resJSON => console.log(resJSON));
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
/* .requestCard {
  max-width: 300px;
} */
</style>