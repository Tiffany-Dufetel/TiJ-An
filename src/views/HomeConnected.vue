<template>
    <NavbarConnected
        buttonName="SE DECONNECTER"/>
    <div class="container">

        <input type="text" name="title" id="title" placeholder="Votre titre ici..." v-model="title"><br/>
        <textarea name="description" id="description" v-model="content"></textarea><br/>
        <button @click="btnSend">ENVOYER</button>
    </div>
    <div class="article">
        <p v-for="(elements, index) in arrayPosts"
            :key="index">{{elements}}</p>
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
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY3MzM3MDJmMTlmOTAwMWJjMmJmMjgiLCJpYXQiOjE2MzQyMDE5MzMsImV4cCI6MTYzNDI4ODMzM30.gxS10r4GDTFRl3_56Vi0-R1j2lDLaJBjbATE3z0-2X4"
                },
                body: JSON.stringify({
                    title: this.title,
                    content: this.content,
                })
            }

            const response = await fetch (url, options)
            const dataPosts = await response.json()
            console.log("dataPosts",dataPosts)

            
            // this.arrayPosts.unshift(this.title, this.content)
            // console.log("tableau",this.arrayPosts)
            // localStorage.setItem("arraypost",JSON.stringify(this.arrayPosts))
            // let storedPosts = JSON.parse(localStorage.getItem("arraypost"))
            // console.log(storedPosts)

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