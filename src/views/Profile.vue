<template>
<div v-if="token">
<NavbarConnected
    buttonName="SE DECONNECTER"
/>
  <div class="fullProfilePage">
    <ProfileCard></ProfileCard>
    <CreatePost></CreatePost>
        <ArticlesConnected
            v-for="(element,index) in arrayPosts"
            :key="index"
            :nomArticle="element.lastname"
            :prenomArticle="element.firstname"
            :dateArticle="element.date"
            :titleArticle="element.title"
            :contentArticle="element.content"
            :postId="element._id"
            :comments="element.comments"
            :likes="element.likes"
            :userId="element.userId"
        />  
  </div>
</div>
    <div v-else>
        <Navbar
            buttonName="SE CONNECTER"/>
        <p class="message-erreur">OH OH... VOUS DEVEZ ÊTRE CONNECTE POUR ACCEDER A CETTE PAGE</p>
    </div>
<Footer/>
</template>


<script>
import NavbarConnected from '../components/NavbarConnected.vue';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import ProfileCard from "../components/ProfileCard.vue";
import CreatePost from "../components/CreatePost.vue";
import ArticlesConnected from "../components/ArticlesConnected.vue";

export default {
  data(){
    return{
      token: true,
      id: "",
      arrayPosts:[]
    }
  },
  components: {
    ProfileCard: ProfileCard,
    CreatePost: CreatePost,
    NavbarConnected: NavbarConnected,
    Navbar: Navbar,
    Footer: Footer,
    ArticlesConnected: ArticlesConnected,
  },
    async mounted(){
        const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/posts?limit=5"

        const response = await fetch (url)
        const dataPosts = await response.json()
        console.log("POST",dataPosts)
        this.arrayPosts = dataPosts.posts

        console.log("coucou",this.arrayPosts)

        const userToken = localStorage.getItem("userToken")
        this.token = userToken
        
    }
};
</script>

<style scoped>

</style>
