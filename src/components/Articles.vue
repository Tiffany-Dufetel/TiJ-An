<template>
<div class="container">
  <div class="container-article">
    <div class="container-entete">
      <div class="photo-profile">
        <img src="../assets/pic-profile.jpg">
      </div>
      <div class="container-id">
        <p class="identite">{{nomArticle.toUpperCase()}} {{prenomArticle}}</p>
        <p class="date">{{dateArticle}}</p>
      </div>
    </div>
    <div class="container-decription">
      <div class="container-titre">
        <p>{{titleArticle}}</p>
      </div>
      <div class="container-content">
        <p>{{contentArticle}}</p>
      </div>
    </div>
  </div>
  <div class="container-photos" style="overflow-y: scroll; height:400px; width:250px">
    <img src="../assets/a.jpg"/><br/>
    <img src="../assets/ab.jpg"/><br/>
    <img src="../assets/abc.jpg">
  </div>
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
  },
  data(){
  return{
    arrayPosts: [],
  }
  },
}
</script>
<style>
.container{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width: 80%;
  padding: 40px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 30px;
}
.container-article{
  text-align: left;
  width: 135vh;
  color: #415e64;
  font-weight: 300;

}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 ::-webkit-scrollbar-thumb {
  background: #4a696e; 
}
::-webkit-scrollbar-thumb:hover {
  background: #679299; 
}
img{
  width: 200px;
}
.container-entete{
  display: flex;
  margin-left: 15px;
}
.photo-profile img{
  width: 80px;
  border-radius: 50%;
}
.container-id{
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.identite{
  font-weight: 600;
  margin: 0;
}
.date{
  font-size: 13px;
  margin: 0;
}
.container-decription{
  font-size: 14px;
  padding: 20px 40px 20px 20px 
}
.container-titre{
  text-transform: uppercase;
  text-decoration: underline;
  margin-left: 80px;
  font-weight: bold;
}

</style>
