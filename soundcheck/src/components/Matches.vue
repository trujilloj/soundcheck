<template>
<div class="card text-white bg-dark mb-3">
    <h4  class="card-header">{{match.request.borrowerName}}</h4>
        <div class="card-body">
            <p>Phone: {{match.request.borrowerPhone}}
            <br />Email: {{match.request.borrowerEmail}}</p>
            <h4>What was requested:</h4>
            <p>{{match.request.borrowerRequest}}</p>
            <h4>What you're bringing:</h4>
            <p>{{match.lenderGear}}</p>
            <h4>On {{readableDate}} 
                <br /> at {{readableTime}}</h4>
            <p>Delivered to:</p>
            <p>{{match.request.venueName}}
              <br />{{match.request.venueStreet}},
              <br />{{match.request.venueCity}}, {{match.request.venueState}} {{match.request.venueZip}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      readableDate: "",
      readableTime: "",
    };
  },
  props: ["match"],
  mounted() {
    this.readableDate = this.match.request.date;
    var date = new Date(this.readableDate);
    this.readableDate = date.toDateString();
    this.readableTime = this.match.request.date;
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
</style>