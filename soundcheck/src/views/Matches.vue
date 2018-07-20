<template>
    <div>
        <Header />
        <!-- <img src="../../public/biglogo.png"> -->
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
  },
  data() {
    return {
      API: {
        REQUESTS: "https://gentle-waters-19521.herokuapp.com/requests/",
        LENDERS: "https://gentle-waters-19521.herokuapp.com/lenders/"
      },
      requestList: [],
      lenderList: []
    };
  },
  methods: {},
  async mounted() {
    fetch(this.API.REQUESTS)
      .then(res => res.json())
      .then(res => {
        this.requestList = res;
        console.log(this.requestList);
      });
    fetch(this.API.LENDERS)
      .then(res => res.json())
      .then(res => {
        this.lenderList = res;
        console.log(this.lenderList);
      });
  }
};
</script>

<style scoped>
</style>