<template>
    <div  class="card text-white bg-dark mb-3">
        <h4  class="card-header">{{borrower.borrowerName}}</h4>
        <div class="card-body cardStyle">
            <p>Requests:</p>
            <p>{{borrower.borrowerRequest}}</p>
            <h4>On {{readableDate}} 
                <br /> at {{readableTime}}</h4>
            <p>Delivered to:</p>
            <h4>{{borrower.venueName}}</h4>
            <p>{{borrower.venueStreet}}
            <br />{{borrower.venueCity}}, {{borrower.venueState}} {{borrower.venueZip}}</p>
            <div :id=borrower.id class="myLocation"></div>
        </div>
        <button class="btn btn-success" @click.prevent="enterInfo(borrower.id, borrower)">Fill this Request</button>
    </div>
</template>

<script>
export default {
data() {
return {
    readableDate: "",
    readableTime: "",
    lat: 0,
    long: 0,
};
},
props: ["borrower", "requestId", "fillRequest", "enterInfo"],
mounted() {
this.readableDate = this.borrower.date;
var date = new Date(this.readableDate);
this.readableDate = date.toDateString();
this.readableTime = this.borrower.date;
var time = new Date(this.readableTime);
this.readableTime = time.toLocaleTimeString();

var address = (this.borrower.venueStreet + ", " + this.borrower.venueZip);
var google_url =
    "https://maps.googleapis.com/maps/api/geocode/json?address=";
var sensor = "&sensor=false";
var resultado;


var mapId = this.borrower.id
fetch(google_url + address + sensor)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    this.lat = Number(
        JSON.stringify(res.results[0].geometry.location.lat)
    );
    this.long = Number(
        JSON.stringify(res.results[0].geometry.location.lng)
    );
    var mymap = L.map(mapId).setView([this.lat, this.long], 15);
    var marker = L.marker([this.lat, this.long]).addTo(mymap);

    L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
            "pk.eyJ1IjoianRydWppbGxvIiwiYSI6ImNqajRyaDVzbTFsYTkzcHBnbmN6YjJncmkifQ.wxvG32Dfjw0zofjoltj8SQ"
        }
    ).addTo(mymap);

    marker
        .bindPopup(
        `${this.borrower.venueStreet} <br /> ${this.borrower.venueCity}, ${this.borrower.venueState} ${this.borrower.venueZip}`
        )
        .openPopup();
    });
}
};
</script>

<style scoped>
.myLocation {
  height: 200px;
  width: 280px;
}
.requestCard {
    width: 300px;
}
.cardStyle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>