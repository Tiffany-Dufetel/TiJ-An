<template>
    <NavbarConnected
        buttonName= "SE DECONNECTER"/>

        <div class="profileCard">
            <div class="profilePicture">
            <img src="../assets/pic-profile.jpg"/>
            </div>

            <div class="profileContent">
            <div class="pseudo-travellerType">
                <h2 class="affichagePseudo">{{firstname}} {{lastname.toUpperCase()}}</h2>
                <p class="affichageTravellerTypeValue"></p>
            </div>
            <p class="description">
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ex sem, convallis 
                id erat in, dapibus ullamcorper orci. Mauris ac scelerisque est, non laoreet nulla. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Maecenas tempus tellus in mollis porttitor. Duis vitae arcu justo. Phasellus rutrum 
                magna non neque dapibus ullamcorper. Nam vitae ex et metus sollicitudin volutpat at 
                nec odio. Morbi ante libero, facilisis eget laoreet cursus, egestas pharetra elit.
            </p>

            <p class="affichageVisitedCountry">
                PAYS VISITE(S): Croatie, Inde, UK, USA<br/>
                TYPE DE VOYAGEUR: Backpacker
            </p>
            </div>
        </div>


    <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue'
import NavbarConnected from '../components/NavbarConnected.vue'
export default {
    props: {
        userId: String,
    },

    data(){
        return{
            lastname: "",
            firstname:"",
        }
    },
    components: { 
        NavbarConnected: NavbarConnected,
        Footer: Footer,
    },

    async mounted(){
        const token = localStorage.getItem("userToken")
        console.log("tk",token)

        const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/user/"+this.userId
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+ token
            }
        }
        const response = await fetch (url,options)
        const data = await response.json()
        console.log("oups",data)
        this.firstname = data.firstname
        this.lastname = data.lastname
    }
    
}
</script>

<style scoped>
.profileCard{
  font-weight: 400 ;  
  display: flex;
  width: 80%;
  padding: 20px 40px;
  background-color: white;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 250px;
}

.profilePicture img{
  border-radius: 50%;
  display: flex;
}

.profilePicture{
  display: flex;
  justify-content: center;
  align-items: center;
}

.profileContent{
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  justify-content: center;
}

.affichagePseudo{
  color: #415e64;
  margin-left: 40px;
}

</style>