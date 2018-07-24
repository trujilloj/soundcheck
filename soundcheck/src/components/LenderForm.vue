<template>
    <div class="lenderForm">
        <div>
            <RequestInfo :borrower="selectedRequest"/>
            </div>
        <div class="lenderDetails">
        <h1>Fill in your Info</h1>
        <form v-on:submit.prevent="fillRequest">
            <input v-model="lenderInfo.lenderEmail" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="Your Email">
            <input  v-model="lenderInfo.lenderName" class="form-control mb-2 mr-sm-2" type="text" name="name" placeholder="Your First and Last Name">
            <input v-model="lenderInfo.lenderPhone" class="form-control mb-2 mr-sm-2" type="text" name="phone"    placeholder="Your Phone Number">
            <input v-model="lenderInfo.lenderStreet" class="form-control mb-2 mr-sm-2" type="text" name="street"    placeholder="Your Address">
            <input v-model="lenderInfo.lenderCity" class="form-control mb-2 mr-sm-2" type="text" name="city"    placeholder="City">
            <input v-model="lenderInfo.lenderState" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="State">
            <input v-model="lenderInfo.lenderZip" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="ZIP">
            <input v-model="lenderInfo.lenderGear" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="Gear You'll Provide">
            <input class="btn btn-success" type="submit" name="submit" value="Submit"/>
        </form>
        </div>
    </div>
</template>

<script>
import RequestInfo from "@/components/RequestInfo.vue";

    export default {
        components: {
            RequestInfo
        },
        props: ["lenderInfo", "API", "fillRequest", "selectedRequest"]
    }
</script>

<style scoped>
.lenderForm {
    background-color: RGBA(255,255,255,.25);
    width: 90%;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    padding: 1%;
    margin-bottom: 2%;
}
.lenderDetails {
    width: 40%;
    margin-left: 2%;
}

</style>