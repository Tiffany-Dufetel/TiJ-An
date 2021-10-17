<template>
    <NavbarConnected
        buttonName="SE DECONNECTER"/>
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
        />

    </div>
    <Footer/>
</template>

<script>
import ArticlesConnected from "../components/ArticlesConnected.vue"
import Footer from "../components/Footer.vue"
import NavbarConnected from "../components/NavbarConnected.vue"
import CreatePost from "../components/CreatePost.vue"

export default {
    components:{
        "Footer": Footer,
        "NavbarConnected": NavbarConnected,
        "ArticlesConnected": ArticlesConnected,
        "CreatePost": CreatePost,
    },
    data(){
        return{
            arrayPosts: [],
        }
    },


    async mounted(){
        const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/posts"

        const response = await fetch (url)
        const dataPosts = await response.json()
        console.log("POST",dataPosts)
        this.arrayPosts = dataPosts.posts

        console.log("coucou",this.arrayPosts)
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