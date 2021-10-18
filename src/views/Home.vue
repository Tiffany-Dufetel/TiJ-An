<template>
    <Navbar
      buttonName="SE CONNECTER / S'INSCRIRE"/>
      <div class="banner">
        <img src="../assets/banner.jpg">
      </div>
    <Articles
        v-for="(element,index) in arrayPosts"
        :key="index"
        :nomArticle="element.lastname"
        :prenomArticle="element.firstname"
        :dateArticle="element.date"
        :titleArticle="element.title"
        :contentArticle="element.content"
    />
    <Footer/>
</template>

<script>
import Articles from '../components/Articles.vue';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"



export default {
  data(){
  return{
    arrayPosts: []
  }
},
  components: {
    "Footer": Footer,
    "Articles": Articles,
    "Navbar": Navbar,
  },
  async mounted(){
    const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/posts"

    const response = await fetch (url)
    const dataPosts = await response.json()
    console.log("POST",dataPosts)
    this.arrayPosts = dataPosts.posts

    console.log(this.arrayPosts)
  }
};
</script>

<style scoped>
.banner img{
  width: 60%;
}
.banner{
  display:flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto
}

</style>
