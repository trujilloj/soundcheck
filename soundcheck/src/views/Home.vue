<template>
    <div>
        <Header />
        <div class="home">
            <div class="box ">
                <img class="homeLogo" src="../../public/soundcheck1920.png">
                <section id="whatIs">
                    SOUNDCHECK is an alternative to packing $5,000 worth of gear into a $1,000 van. By relying on the local music scene to support visiting musicians we can all tour more safely and with less burden.
                </section>
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

<style>
.loadOnce {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
.homeLogo {
  max-width: 90%;
  height: auto;
  opacity: 0.9;
}
#whatIs {
  font-size: 2rem;
  width: 90%;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 1.5%;
  margin-top: 1%;
  text-align: justify;
  padding: 1%;
  line-height: 1.8rem;
}
</style>