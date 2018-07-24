<template>
    <div>
        <Header />
        <div class="home">
            <div class="box">
                <div class="whatIs">
                    SOUNDCHECK was built on the experience of hundreds of shows and numerous tours. We know what it's like to sleep in your van behind a truck stop in the middle of Texas. What it's like to show up to a show at a venue that is now demanding you pay them money AND provide a P.A., even though you barely had enough cash to make it to the venue. What it's like to play at 1:00 am after all of the local bands have already went home. Hopefully this will make pursuing your dreams a little bit easier.
                </div>
                <img class="aboutLogo" src="../../public/blacklogo.png">
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.whatIs {
  font-size: 2rem;
  width: 90%;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1.5%;
  text-align: justify;
  padding: 1%;
  line-height: 1.8rem;
}
.aboutLogo {
    width: 40%;
    height: auto;
}
</style>