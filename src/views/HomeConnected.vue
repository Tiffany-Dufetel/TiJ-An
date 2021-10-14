<template>
    <NavbarConnected
        buttonName="SE DECONNECTER"/>
    <div class="container">

        <input type="text" name="title" id="title" placeholder="Votre titre ici..." v-model="titleArticle"><br/>
        <textarea name="description" id="description" v-model="contentArticle"></textarea><br/>
        <button @click="btnSend">ENVOYER</button>
    </div>
    <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue"
import NavbarConnected from "../components/NavbarConnected.vue"

export default {
    components:{
        "Footer": Footer,
        "NavbarConnected": NavbarConnected,
    },
    data(){
        return{
            titleArticle: "",
            contentArticle: "",
            arrayPosts: [],
        }
    },
    methods: {
        async btnSend(){
            const url="https://dw-s3-nice-tijean.osc-fr1.scalingo.io/post"
            const options= {
                method: "POST",
                headers: {
                    "Authorization":"bearer token"
                },
                body: {
                    title: this.titleArticle,
                    content: this.contentArticle,
                }
            }

            const response = await fetch (url, options)
            const dataPosts = await response.json()

            console.log(dataPosts)
        }
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