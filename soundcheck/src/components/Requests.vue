<template>
  <div :class=matchStyle.class>
    <div class="card-body cardStyle">
        <h4>What you requested:</h4>
        <p>{{match.borrowerRequest}}</p>
        <h4>On {{readableDate}} 
          <br /> at {{readableTime}}</h4>
        <p>Delivered to:</p>
        <p>{{match.venueName}}
          <br />{{match.venueStreet}},
          <br />{{match.venueCity}}, {{match.venueState}} {{match.venueZip}}
        </p>
        <div :id=match.id></div>
        <button class="btn btn-danger" @click.prevent="deleteRequest(match.id)">Delete this Request</button>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    readableDate: "",
    readableTime: "",
    fulfilled: false,
    matchStyle: {
        class: "card text-white bg-dark border-danger mb-3 requestCard"
    }
  };
},
props: ["match", "deleteRequest", "deleteId", "API"],
methods: {
},
mounted() {
  if (this.match.lender) {
      this.fulfilled = true;
      this.matchStyle.class = "card text-white bg-dark border-success mb-3 requestCard";
      var lenderId = this.match.id;
      var lender = this.match.lender;
      document.getElementById(lenderId).innerHTML = `<h4>Lender Contact Info:</h4>
        <p>
          ${lender.lenderName}
          <br />${lender.lenderEmail}
          <br />${lender.lenderPhone}
        </p>
        <h4>What's coming:</h4>
        <p>${lender.lenderGear}</p>`
  };
  this.readableDate = this.match.date;
  var date = new Date(this.readableDate);
  this.readableDate = date.toDateString();
  this.readableTime = this.match.date;
  var time = new Date(this.readableTime);
  this.readableTime = time.toLocaleTimeString();
  }
};
</script>

<style scoped>
.myLocation {
  height: 200px;
  max-width: 370px;
  min-width: 320px;
}
.requestCard {
  max-width: 300px;
  border-width: 3px;
}
.cardStyle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
}
</style>