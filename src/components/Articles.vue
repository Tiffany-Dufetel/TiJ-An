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

</style>
