<template>
    <div id="nav">
        <img src="../assets/logo.png"/>
        <div class="btn-home">
            <router-link to="/">
                <button>HOME</button>
            </router-link>
        </div>
        <div class="btn-co">
            <router-link to="/seconnecter">
                <button>{{buttonName}}</button>
            </router-link>
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
    justify-content: right;
    background-image: url("../assets/bg-navbar.jpg");
    background-size: cover;
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
}

#nav img{
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 200px;
    position: absolute;
    top: 35px;
}

#nav button{
    margin-top: 30px;
    margin-right: 100px;
    float: right;
    right: 0px;
    background-color: #cad2c5;
    border: none;
    color: 405e63;
    padding: 10px 40px;
}
</style>