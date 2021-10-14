<template>
    <div id="nav">
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

<style>
#nav{
    background-color: red;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 40px;
}
</style>