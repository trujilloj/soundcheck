<template>
    <div>
        <Header />
        <Login v-show="displayLogin" :switchSignup="switchSignup" :signup="signup" :submitLogin="submitLogin" :loginData="loginData" :displayLogin="displayLogin" :toggleDisplay="toggleDisplay"/>
        <div class="home" v-show="!displayLogin">
          <div class="box">
            <div v-show="showButtons">
              <h3>Upcoming Matches:</h3>
              <button v-show="!showMatches" class="btn btn-success cardSpacing" @click.prevent="showMatches = !showMatches">Hide Upcoming Matches</button>
              <button v-show="showMatches" class="btn btn-success cardSpacing" @click.prevent="showMatches = !showMatches">Show Upcoming Matches</button>
            </div>
          <section id="myMatches" class="cardSpacing" v-show="!showMatches">
            <Requests v-for="match in myRequests" :key="match.id" :match="match" :deleteId="deleteId" :deleteRequest="deleteRequest"/>
          </section>
          <button v-show="!displayForm" class="btn btn-success cardSpacing" @click.prevent="displayForm = !displayForm, resetForm()">Make a New Request</button>
          <RequestForm v-show="displayForm" :formSubmission="formSubmission" :borrowerInfo="borrowerInfo" :submitRequest="submitRequest"/>
          </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import RequestCard from "@/components/RequestCard.vue";
import Requests from "@/components/Requests.vue";
import RequestForm from "@/components/RequestForm.vue";

export default {
components: {
  Header,
  Footer,
  Login,
  RequestCard,
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
      bandName: "",
      borrowerEmail: "",
      borrowerZip: "",
      borrowerCity: "",
      borrowerName: "",
      borrowerRequest: "",
      borrowerPhone: "",
      borrowerState: "",
      borrowerStreet: "",
      venueName: "",
      venueStreet: "",
      venueCity: "",
      venueState: "",
      venueZip: "",
      date: ""
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
    displayForm: false,
    formSubmission: false,
    deleteId: "",
    showButtons: false
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
        this.showButtons = true;
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
  deleteRequest(id) {
    this.deleteId = id;
    console.log(this.API.REQUESTS + this.deleteId);
    const postOptions = {
      method: "DELETE"
    };
    fetch(this.API.REQUESTS + this.deleteId, postOptions)
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON.error) {
          alert(
            "Something went wrong. Please make sure the form is complete and try again."
          );
        } else {
          alert("Request Deleted");
          this.formSubmission = true;
          this.myRequests.filter(match => {
            if (match.id === id) {
              const index = this.myRequests.indexOf(match.id);
              this.myRequests.splice(index, 1);
            }
          });
        }
      });
  },
  enterInfo(id, borrower) {
    this.displayLender = !this.displayLender;
    this.requestId = id;
    this.selectedRequest = borrower;
  },
  toggleDisplay() {
    this.displayLogin = !this.displayLogin;
  },
  resetForm() {
    this.borrowerInfo = {
      bandName: "",
      borrowerEmail: "",
      borrowerZip: "",
      borrowerCity: "",
      borrowerName: "",
      borrowerRequest: "",
      borrowerPhone: "",
      borrowerState: "",
      borrowerStreet: "",
      venueName: "",
      venueStreet: "",
      venueCity: "",
      venueState: "",
      venueZip: "",
      date: ""
    };
    this.formSubmission = false;
  },
  submitRequest() {
    const postOptions = {
      method: "POST",
      body: JSON.stringify(this.borrowerInfo),
      headers: { "Content-Type": "application/json" }
    };
    fetch(this.API.REQUESTS, postOptions)
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON.error) {
          alert(
            "Something went wrong. Please make sure the form is complete and try again."
          );
        } else {
          alert("Thank you for your submission!");
          this.formSubmission = true;
        }
      });
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