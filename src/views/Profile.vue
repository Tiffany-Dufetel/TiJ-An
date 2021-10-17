<template>
<NavbarConnected
    buttonName="SE DECONNECTER"
/>
  <div class="fullProfilePage">
    <ProfileCard></ProfileCard>
    <CreatePostCard> </CreatePostCard>
  </div>
<Footer/>
</template>


<script>
import ProfileCard from "../components/ProfileCard.vue";
import CreatePostCard from "../components/CreatePost.vue";
import NavbarConnected from '../components/NavbarConnected.vue';
import Footer from "../components/Footer.vue"

export default {
  components: {
    ProfileCard: ProfileCard,
    CreatePostCard: CreatePostCard,
    NavbarConnected: NavbarConnected,
    Footer: Footer,
  },
};
</script>

<style scoped>
.fullProfilePage {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 160px 0 60px 0;

}
</style>
