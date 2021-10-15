<template>
<div class="container">
  <div class="container-article">
    <p>{{nomArticle}} {{prenomArticle}}</p>
    <p>{{dateArticle}}</p>
    <p>{{titleArticle}}</p>
    <p>{{contentArticle}}</p>
  </div>
  <div class="container-photos" style="overflow-y: scroll; height:400px;">
    <img src="../assets/a.jpg"/><br/>
    <img src="../assets/ab.jpg"/><br/>
    <img src="../assets/abc.jpg">
  </div>
</div>
<div class="container-editcomment">
    <textarea placeholder="Ecrivez votre commentaire" v-model="textareaCom"></textarea><br/>
    <button @click="sendCom">ENVOYER</button>
</div>
<div class="container-commentaires">
    <p v-for="(element,index) in comments" :key="index">
        {{element.content}}<br/>
        posté par {{element.firstname}} {{element.lastname}}
    </p>
</div>

</template>

<script>

export default {
  props:{
    nomArticle: String,
    prenomArticle: String,
    dateArticle: String,
    titleArticle: String,
    contentArticle: String,
    postId: String,
    comments: Array,
  },

  data(){
    return{
        textareaCom: "",
        arrayPosts: [],
        arrayComments: [],
    }
  },

  methods:{
      async sendCom(){
        const usertoken = localStorage.getItem("userToken")

        const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/post/comment"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + usertoken
            },
            body: JSON.stringify({
                postId: this.postId,
                content: this.textareaCom
            })
        }

        const response = await fetch (url,options)
        const data = await response.json()
        console.log("datacomm",data)

        this.textareaCom =""
    },
  }
}
</script>
<style scoped>
.container{
  display: flex;
}

.container-article{
  text-align: left;
  width: 900px;
}

img{
  width: 200px;
}

textarea{
    resize: none;

}
.container-commentaires{
    border: 3px solid red;
}
</style>
