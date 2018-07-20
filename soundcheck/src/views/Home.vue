<template>
    <div>
        <Header />
        <div class="home">
            <div class="box">
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
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

    export default {
        components: {
            Header,
            Footer
        }
        
    }
</script>

<style>
.homeLogo {
    max-width: 800px;
    height: auto;
    margin: 2.5%;
}
#whatIs {
    font-size: 2rem;
    font-weight: bold;
    width: 70%;
}

</style>