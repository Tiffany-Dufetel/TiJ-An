<template>
    <NavbarConnected
        buttonName="SE DECONNECTER"/>
    <div class="container">

        <input type="text" name="title" id="title" placeholder="Votre titre ici..." v-model="title"><br/>
        <textarea name="description" id="description" v-model="content"></textarea><br/>
        <button @click="btnSend">ENVOYER</button>
    </div>
    <div class="article">
        <ArticlesConnected
            v-for="(element,index) in arrayPosts"
            :key="index"
            :nomArticle="element.lastname"
            :prenomArticle="element.firstname"
            :dateArticle="element.date"
            :titleArticle="element.title"
            :contentArticle="element.content"
        /> ncoucou
    </div>
    <!-- <Footer/> -->
</template>

<script>
import ArticlesConnected from "../components/ArticlesConnected.vue"
// import Footer from "../components/Footer.vue"
import NavbarConnected from "../components/NavbarConnected.vue"

export default {
    components:{
        // "Footer": Footer,
        "NavbarConnected": NavbarConnected,
        "ArticlesConnected": ArticlesConnected,
    },
    data(){
        return{
            title: "",
            content: "",
            arrayPosts: [],
        }
    },
    methods: {
        async btnSend(){
            const usertoken = localStorage.getItem("userToken")
            console.log("LS TOKEN",usertoken)

            const url="https://dw-s3-nice-tijean.osc-fr1.scalingo.io/post"
            const options= {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "bearer " + usertoken
                },
                body: JSON.stringify({
                    title: this.title,
                    content: this.content,
                })
            }

            const response = await fetch (url, options)
            const dataPosts = await response.json()
            console.log("dataPosts",dataPosts)
        },
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