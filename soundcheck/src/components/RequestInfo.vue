<template>
    <div class="card text-white bg-dark mb-3 cardSpacing">
        <h4  class="card-header">{{borrower.borrowerName}}</h4>
        <div class="card-body">
            <p>Requests:</p>
            <p>{{borrower.borrowerRequest}}</p>
            <h4>On {{readableDate}} 
                <br /> at {{readableTime}}</h4>
            <p>Delivered to:</p>
            <h4>{{borrower.venueName}}</h4>
            <p>{{borrower.venueStreet}}
            <br />{{borrower.venueCity}}, {{borrower.venueState}} {{borrower.venueState}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            readableDate: "",
            readableTime: "",
        }
    },
  props: ["borrower"],
mounted(){
    var date = new Date ("2018-08-04T18:00:00.000Z");
    this.readableDate = date.toDateString();
    var time = new Date("2018-08-04T18:00:00.000Z");
    this.readableTime = time.toLocaleTimeString();
}
}
</script>

<style scoped>
</style>