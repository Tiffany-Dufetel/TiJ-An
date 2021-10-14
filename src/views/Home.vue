<template>
    <Navbar
      buttonName="SE CONNECTER / S'INSCRIRE"/>
    <Articles/>
    <Footer/>
</template>

<script>
// @ is an alias to /src
import Articles from '../components/Articles.vue';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"

export default {
  components: {
    "Footer": Footer,
    "Articles": Articles,
    "Navbar": Navbar,
  },
};
</script>
