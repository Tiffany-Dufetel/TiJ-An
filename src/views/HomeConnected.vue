<template>
    <div v-if="token">
        <NavbarConnected
            buttonName="DECONNECTER"/>
        
        <CreatePost/>
            <div class="article">
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
                :commentsLikes="element.comments.likes"
            />
            </div>
    </div>

    <div v-else>
        <Navbar
            buttonName="SE CONNECTER"/>
        <MessageErreur/>
    </div>

    
    <Footer/>
</template>

<script>
import ArticlesConnected from "../components/ArticlesConnected.vue"
import Footer from "../components/Footer.vue"
import NavbarConnected from "../components/NavbarConnected.vue"
import CreatePost from "../components/CreatePost.vue"
import Navbar from "../components/Navbar.vue"
import MessageErreur from "../components/MessageErreur.vue"

export default {
    props: {
        userId: String,
    },

    components:{
        "Footer": Footer,
        "NavbarConnected": NavbarConnected,
        "ArticlesConnected": ArticlesConnected,
        "CreatePost": CreatePost,
        "Navbar" : Navbar,
        "MessageErreur": MessageErreur,
    },
    data(){
        return{
            arrayPosts: [],
            token: true,
        }
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
        // this.pages = "11"

        const token = localStorage.getItem("userToken")
        console.log(token)
    
    }

    
}
</script>

<style>
textarea{
    resize: none;
    width: 400px;
    height: 250px;
}


</style>