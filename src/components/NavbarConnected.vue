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
                        PROFIL
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

       
    <!-- </div>
         <div class="hamburger-menu__wrapper">
        <div class="hamburger-menu">
            <div class="hamburger-menu__wrapper">
                <input type="checkbox" />
                <div class="hamburger-menu__button">
                    <span>&mdash;</span>
                    <span>&mdash;</span>
                    <span>&mdash;</span>
                </div>
                <div class="hamburger-menu__slider">
                    <div class="hamburger-menu__item">Thing 1</div>
                    <div class="hamburger-menu__item">Thing 2</div>
                    <div class="hamburger-menu__item">Thing 3</div>
                    <div class="hamburger-menu__item">Thing 4</div>
                </div>
            </div>
        </div>-->
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
/* .hamburger-menu__wrapper {
  min-height: 400px;
  position: relative;
  text-align: center;
}

.hamburger-menu__button {
  width: 40px;
  height: 40px;
  border: 2px solid #777;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 3;
}
.hamburger-menu__button span {
  line-height: 8px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
}
.hamburger-menu__button span:last-child {
  padding-bottom: 5px;
}

.hamburger-menu__wrapper input[type='checkbox'] {
  width: 40px;
  height: 40px;
  outline: 3px solid red;
  opacity: 0;
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 4;
  cursor: pointer;
}
.hamburger-menu__wrapper input:checked ~ .hamburger-menu__button {
  background: #d2f2fc;
}
.hamburger-menu__wrapper input:checked ~ .hamburger-menu__slider {
  transform: none;
}
.hamburger-menu__slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: rgba(22, 124, 150, 0.5);
  z-index: 2;
  transform: translateX(-310px);
  transition: transform 0.3s;
  text-align: left;
  color: white;
  font-weight: 400;
  letter-spacing: 2px;
  

}
.hamburger-menu__item {
  padding: 10px 0 10px 10px;
}
.hamburger-menu__item:hover {
  background-color: #d2f2fc;
}
.hamburger-menu__item:first-of-type {
  margin-top: 60px;
} */
</style>