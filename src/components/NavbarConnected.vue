<template>
    <div id="nav">
        <img src="../assets/logo.png"/>
            <div class="boutons">
                <div class="btn-home">
                    <router-link to="/connected">
                        HOME
                    </router-link>
                </div>
                
                <div class="btn-profile">
                    <router-link to="/profile">
                        MON PROFIL
                    </router-link>
                </div>

                <div class="btn-edit">
                    <router-link to="/edit-profile">
                        EDIT
                    </router-link>
                </div>
                    
                <div class="btn-co">
                    <router-link to="/seconnecter">
                        <span @click="clearLs">{{buttonName}}</span>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonName : String,
    },
    methods:{
        clearLs(){
            localStorage.removeItem("userToken")
        }
    }
}
</script>

<style scoped>

</style>