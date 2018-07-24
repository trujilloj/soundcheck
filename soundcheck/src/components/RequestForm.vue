<template>
    <div class="lenderForm">
        <div class="lenderDetails">
        <h1>Fill in your Info</h1>
        <form v-on:submit.prevent="submitRequest">
            <input v-model="borrowerInfo.borrowerEmail" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="Email">
            <input v-model="borrowerInfo.borrowerName" class="form-control mb-2 mr-sm-2" type="text" name="name" placeholder="First and Last Name">
            <input v-model="borrowerInfo.borrowerPhone" class="form-control mb-2 mr-sm-2" type="text" name="phone"    placeholder="Phone Number">
            <input v-model="borrowerInfo.borrowerStreet" class="form-control mb-2 mr-sm-2" type="text" name="street"    placeholder="Address">
            <input v-model="borrowerInfo.borrowerCity" class="form-control mb-2 mr-sm-2" type="text" name="city"    placeholder="City">
            <input v-model="borrowerInfo.borrowerState" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="State">
            <input v-model="borrowerInfo.borrowerZip" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="ZIP">
            <input v-model="borrowerInfo.borrowerGear" class="form-control mb-2 mr-sm-2" type="text" name="email"    placeholder="Gear Need">
            <input class="btn btn-success" type="submit" name="submit" value="Submit"/>
        </form>
        </div>
    </div>
</template>

<script>

    export default {
        props: ["borrowerInfo", "API"]
    }
</script>

<style scoped>
.lenderForm {
    background-color: RGBA(255,255,255,.25);
    width: 50%;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    padding: 1%;
}
.lenderDetails {
    width: 50%;
    margin-left: 2%;
}

</style>