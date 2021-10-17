<template>
    <div id="nav">
        <img src="../assets/logo.png"/>        
        <router-link to="/connected">
            <button>HOME</button>
        </router-link>
        <router-link to="/profile">
            <button>MON PROFIL</button>
        </router-link>
        <router-link to="/edit-profile">
            <button>EDIT</button>
        </router-link>
        <router-link to="/seconnecter">
            <button>{{buttonName}}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        buttonName : String,
    }
}
</script>

<style scoped>

</style>