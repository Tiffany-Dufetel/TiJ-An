<template>
    <div id="nav">
        <img src="../assets/logo.png"/>
        <div class="boutons">
            <div class="btn-home">
                <router-link to="/">
                    HOME
                </router-link>
            </div>
            <div class="btn-co">
                <router-link to="/seconnecter">
                    {{buttonName}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonName : String,
    }
}
</script>

<style>
#nav{
    display: flex;
    flex-direction: row;
    background-image: url("../assets/bg-navbar.jpg");
    background-size: cover;
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
}

#nav img{
    left: 0;
    /* right: 0; */
    /* margin-left: auto;*/
    margin-left: 40px; 
    display: flex;
    width: 200px;
    position: absolute;
    top: 20px;
}

#nav a{
    background-color:#cad2c5 ;
    padding: 10px 40px;
    font-weight: 200;
    text-decoration: none;
    color: #405e63;

}


#nav a.router-link-exact-active{
    border-top: 4px solid white;
}
.boutons{
    margin: 71px 5px 5px 280px;
    display: flex;
}

.btn-home, .btn-co, .btn-edit, .btn-profile{
    margin-left: 10px;
}
</style>