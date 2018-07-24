<template>
    <div class="lenderForm" v-show="!formSubmission">
        <div class="lenderDetails">
        <h1>Fill in your Info</h1>
        <form v-on:submit.prevent="combineDate(), submitRequest()">
            <input v-model="borrowerInfo.borrowerEmail" class="form-control mb-2 mr-sm-2" type="text" name="email" placeholder="Email">
            <input v-model="borrowerInfo.borrowerName" class="form-control mb-2 mr-sm-2" type="text" name="name" placeholder="First and Last Name">
            <input v-model="borrowerInfo.bandName" class="form-control mb-2 mr-sm-2" type="text" name="bandName" placeholder="Band Name">
            <input v-model="borrowerInfo.borrowerPhone" class="form-control mb-2 mr-sm-2" type="text" name="phone" placeholder="Phone Number">
            <input v-model="borrowerInfo.borrowerStreet" class="form-control mb-2 mr-sm-2" type="text" name="street" placeholder="Address">
            <input v-model="borrowerInfo.borrowerCity" class="form-control mb-2 mr-sm-2" type="text" name="city" placeholder="City">
            <input v-model="borrowerInfo.borrowerState" class="form-control mb-2 mr-sm-2" type="text" name="state" placeholder="State">
            <input v-model="borrowerInfo.borrowerZip" class="form-control mb-2 mr-sm-2" type="text" name="zip" placeholder="ZIP">
            <input v-model="borrowerInfo.borrowerRequest" class="form-control mb-2 mr-sm-2" type="text" name="gear" placeholder="Gear Needed">
            <input v-model="borrowerInfo.venueName" class="form-control mb-2 mr-sm-2" type="text" name="venueName" placeholder="Venue Name">
            <input v-model="borrowerInfo.venueStreet" class="form-control mb-2 mr-sm-2" type="text" name="venueStreet" placeholder="Venue Street">
            <input v-model="borrowerInfo.venueCity" class="form-control mb-2 mr-sm-2" type="text" name="venueCity" placeholder="Venue City">
            <input v-model="borrowerInfo.venueState" class="form-control mb-2 mr-sm-2" type="text" name="venueState" placeholder="Venue State">
            <input v-model="borrowerInfo.venueZip" class="form-control mb-2 mr-sm-2" type="text" name="venueZip" placeholder="Venue ZIP">
            <input v-model="formDate" class="form-control mb-2 mr-sm-2" type="date" name="date" placeholder="Date">
            <input v-model="formTime" class="form-control mb-2 mr-sm-2" type="time" name="time" placeholder="Time">


            <input class="btn btn-success" type="submit" name="submit" value="Submit"/>
        </form>
        </div>
    </div>
</template>

<script>

    export default {
        props: ["borrowerInfo", "API", "submitRequest", "successfulSubmission", "formSubmission"],
        data () {
            return {
                formDate: "",
                formTime: ""            }
        },
        methods: {
            combineDate() {
                this.borrowerInfo.date = (this.formDate + "T" + this.formTime + ":00.000Z");
            }
        }
    }
</script>

<style scoped>
.lenderForm {
    background-color: RGBA(255,255,255,.25);
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    margin-bottom: 4%;
}
.lenderDetails {
    width: 50%;
    margin-left: 2%;
}

</style>