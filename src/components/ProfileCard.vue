<template>
  <div class="profileCard">
    <div class="profilePicture">
      <img src="../assets/pic-profile.jpg"/>
    </div>

    <div class="profileContent">
      <div class="pseudo-travellerType">
        <h2 class="affichagePseudo">{{prenom}} {{nom.toUpperCase()}}</h2>
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
</template>

<script>
export default {
  data() {
    return{
      prenom: "",
      nom: ""
    }
  },
  async mounted(){
      const usertoken = localStorage.getItem("userToken")
      console.log(usertoken)

      const options= {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer " + usertoken
        }
      }

      const url="https://dw-s3-nice-tijean.osc-fr1.scalingo.io/user"
      const response = await fetch (url,options)
      var data = await response.json()
      console.log("oulah2",data)
      this.prenom = data.firstname
      this.nom = data.lastname
  },
};
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
