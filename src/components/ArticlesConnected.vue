<template>
<div class="container">
  <div class="container-article">
    <div class="container-entete">
      <div class="photo-profile">
        <router-link to="/profileinfo"><a @click="getUser"><img src="../assets/pic-profile.jpg"></a></router-link>
      </div>
      <div class="container-id">
        <p class="identite">{{test}}{{nomArticle.toUpperCase()}} {{prenomArticle}}</p>
        <p class="date">{{dateArticle}}</p>
      </div>
    </div>
    <div class="container-decription">
      <div class="container-titre">
        <p>{{titleArticle}}</p>
      </div>
      <div class="container-content" style="overflow-y: scroll; height:250px;">
        <p>{{contentArticle}}</p>
      </div>
    </div>
     <LikeCounter :initialLikeNumber="likes.length" :postId="postId" />
  </div>
  <div class="container-photos" style="overflow-y: scroll; height:400px; width:250px">
    <img src="../assets/a.jpg"/><br/>
    <img src="../assets/ab.jpg"/><br/>
    <img src="../assets/abc.jpg">
  </div>
</div>


<div class="container-editcomment">
  <div class="comment">
      <div class="text-comment">
        <textarea placeholder="ECRIVEZ VOTRE COMMENTAIRE" v-model="textareaCom"></textarea><br/>
        <button @click="sendCom">ENVOYER</button>
      </div>
  </div>
</div>
<div class="commentaires">
  <p class="comm-here">Vos commentaires juste ici:</p>
    <div 
      class="container-commentaires" 
      v-for="(element,index) in comments" 
      :key="index"
    >
        <div class="pic-commentaire">
          <img src="../assets/pic-profile.jpg">
        </div>
        <div class="comm">
          <p>
            {{element.content}}<br/>
            <span class="post-by">posté par {{element.firstname}} {{element.lastname}}</span>
          </p>
        </div>
    </div>
</div>
<br/><hr/>

</template>

<script>
import LikeCounter from "../components/LikeCounter.vue";

export default {
  components: {
    LikeCounter: LikeCounter,
  },
  props:{
    nomArticle: String,
    prenomArticle: String,
    dateArticle: String,
    titleArticle: String,
    contentArticle: String,
    postId: String,
    comments: Array,
    likes: Array,
    userId: String,
  },

  data(){
    return{
        id:"",
        textareaCom: "",
        arrayPosts: [],
        arrayComments: [],
        test: "",
    }
  },

  methods:{
      async sendCom(){
        window.location.reload();

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
      async getUser(){
        const token = localStorage.getItem("userToken")
        console.log(token)
        
        const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/user/" + this.userId
        const options = {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          },
          parameters: { 
            id: this.userId,
          }
        }
        const response = await fetch (url,options)
        const data = await response.json()
        console.log("datauser",data)
      }
  }
}
</script>
<style scoped>
hr{
  width: 50%;
  background-color: white;
}
.container-editcomment textarea{
  padding-top: 20px;
  border: none;
  width: 100%;
  height: 135px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
}
.container-editcomment{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top:1px;
}
.comment{
  margin-top: 2px;
  display: flex;
  justify-content: center;
  background-color: white;
  width: 80%;
  padding: 0 40px;
  height:200px;
}
.comment button{
  display: block;
  margin-right: auto;
  margin-left: auto;
  pointer-events: auto;
  background-color: #cad2c5;
  border: none;
  color: 405e63;
  padding: 5px 80px;
  color: #405e63;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.text-comment{
  background: white;
  width: 100%;
  height:140px

}
.container-commentaires{
  display: flex;
  background-color: white;
  width: 100%;
  flex-direction: row;
  margin: auto;

}


.commentaires{
  padding: 0 40px;
  margin: auto;
  height: 240px;
  overflow-y: scroll;
  background-color: white;
  width: 80%;
}


.pic-commentaire img{
 width: 60px;
 border-radius: 50%;

}
.comm{
  margin-left: 20px;
  font-weight: 400;
}
.post-by{
  font-size: 13px;
  font-style: italic;
}

.comm-here{
  font-weight: 400;
}
</style>
