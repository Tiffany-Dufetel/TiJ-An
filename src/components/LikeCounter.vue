<template>
  <div class="likeCounter">
    <img
      src="../assets/like.png"
      class="likeButton"
      alt="like"
      @click="likeCounter"
    />
    <p>{{ LikeNumber }} likes</p>
  </div>
</template>

<script>
export default {
  props: {
    postId: String,
    initialLikeNumber: Number,
    like: String,
  },
  data: function () {
    return {
      LikeNumber: this.initialLikeNumber,

    };
  },

  // computed: {
  //   changeLike(){
  //     if (){
  //       return "likeButton"
  //   }
  // },

  methods: {
    async likeCounter() {
      const usertoken = localStorage.getItem("userToken");
      const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/post/like";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + usertoken,
        },

        body: JSON.stringify({
          postId: this.postId,
        }),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log("LikeNumber", data);

      if (data.success) {
        this.LikeNumber++;
      }
    },
  },
};
</script>

<style>
.likeButton {
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin: 10px;
}

.likebutton :active {
  width: 30px;
  height: 30px;
}

.likeCounter {
  display: flex;
  flex-direction: row;
}
</style>
