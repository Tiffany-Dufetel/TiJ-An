<template>
  <div class="postNewContent">
    <input type="text" v-model="title" placeholder="votre titre" required />
    <textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
      v-model="content"
      placeholder="description de vos photos"
    ></textarea>
    <input type="file" accept="image/" multiple />
    <button @click="postIt">Envoyer</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      pictureList: [],
      postContent: [],
    };
  },

  /*methods:{
      postIt(){
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: String,
        content: String,
        pictureList:Array,//C'est possible ou pas ça???
      }),
    },
    const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/post";
    const response = await fetch(url, options);

    console.log(response);

    const data = await response.json();

    console.log(data);
    }
}*/
};
</script>
