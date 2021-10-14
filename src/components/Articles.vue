<template>
<div class="container">
  <div class="container-article">
    <p>NOM Prénom</p>
    <p> date-heure </p>
    <p>Titre voyage</p>
    <p>Nam aliquam maximus vehicula. In ut placerat arcu. In orci turpis, varius vel augue non, 
      aliquam feugiat augue. In eget arcu ornare, pharetra lorem nec, pellentesque eros. Nunc ut 
      porta augue. Suspendisse a ligula metus. Fusce in vehicula nibh. Aliquam posuere sagittis 
      erat et bibendum. Proin rutrum lectus sit amet fringilla venenatis. Vivamus suscipit, 
      tellus ac rutrum tincidunt, augue turpis varius risus, eu porta enim felis vel mauris. Nunc
      eu pulvinar massa, et dignissim arcu. Etiam egestas nunc ut lacinia aliquam. Mauris eu urna 
      semper, molestie dolor sit amet, fermentum nunc.</p>
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

  data(){
  return{
    arrayPosts: [],
  }
  },
  async mounted(){
    const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/posts"

    const response = await fetch (url)
    const dataPosts = await response.json()
    console.log(dataPosts)
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

</style>
