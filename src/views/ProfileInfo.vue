<template>
    <NavbarConnected
        buttonName= "SE DECONNECTER"/>
    <Footer/>

</template>

<script>
import Footer from '../components/Footer.vue'
import NavbarConnected from '../components/NavbarConnected.vue'
export default {
    components: { 
        NavbarConnected: NavbarConnected,
        Footer: Footer,
        },
    
}
</script>

<style scoped>

</style>