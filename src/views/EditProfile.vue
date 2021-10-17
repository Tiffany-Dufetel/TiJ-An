<template>
<NavbarConnected
    buttonName="SE DECONNECTER"/>
  <div class="container">
    <form action="" class="editProfil">
      <div class="container-nomprenom">
        <div class="container-prenom">
          <label for="prenom" class="uppercase">prénom* </label><br />
          <input
            type="text"
            v-model="prenom"
            id="prenom"
            required
          /><br />
        </div>
        <div class="container-nom">
          <label for="nom" class="uppercase">nom* </label><br />
          <input
            type="text"
            v-model="nom"
            id="nom"
            required
          /><br />
        </div>


      </div>

        <label for="email">ADRESSE MAIL* </label><br />
        <input
          type="email"
          id="email"
          v-model="email"
          required
        /><br />

        <label for="pseudo" class="uppercase">Pseudo* </label><br />
        <input
          type="text"
          v-model="pseudo"
          id="pseudo"
          required
        /><br />

        <label for="password">
            <span class="uppercase">mot de passe*</span> (doit contenir 8
          caractères minimum) :
        </label><br />
          <input type="password"
          v-model="password"
          id="password"
          minlength="8"
          required
        /><br />

        <label for="date" class="uppercase">date de naissance* </label><br />
        <input type="date" v-model="date" id="date" required /><br />

          <label for="gender" class="uppercase">sexe*</label><br />
          <select name="gender" id="gender" required>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>

          <label for="profilPic" class="uppercase">choisir ma photo</label
          ><br />
          <input type="file" accept="image/*" />

      <h2 class="uppercase">- rajouter plus d'infos -</h2>

        <label for="description">
            <span class="uppercase">description</span> (maximum 200 caractères)
        </label><br />
        <textarea
          name="description"
          id="description"
          v-model="description"
          cols="30"
          rows="10"
          maxlength="200"
        ></textarea><br/>

        <label for="visitedCountry" class="uppercase">pays déjà visité(s) </label
        ><br />
        <input
          v-model="visitedCountry"
          type="text"
          id="visitedCountry"
        /><br />

        <label for="travellerType" class="uppercase">type de voyageur</label>
        <select
          name="travellerType"
          id="travellerType"
          v-model="travellerTypeValue"
        >
          <option value="Backpacker">Backpacker</option>
          <option value="NormalTourist">Voyageur basique</option>
          <option value="All-In">Voyageur All-In</option>
        </select>

      <button @click="updateClick" class="uppercase">
          Actualiser
      </button>

      <!-- >
        <router-link class="no-deco" to="/">
           <p> Supprimer mon profil </p>
        </router-link>
       -->
    </form>
  </div>
  <Footer/>
</template>

<script>
import NavbarConnected from "../components/NavbarConnected.vue"
import Footer from "../components/Footer.vue"

export default {
    components:{
        "NavbarConnected": NavbarConnected,
        "Footer": Footer,
    },
  data() {
    return {
      nom: "",
      prenom: "",
      pseudo: "",
      password: "",
      email:"",
      date: "",
      gender: "",
      description: "",
      visitedCountry: "",
      travellerTypeValue: "",
    };
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
      console.log("oulah",data)
      this.prenom = data.firstname
      this.nom = data.lastname
      this.email = data.email
  },

  methods:{
    async updateClick(){
      const usertoken = localStorage.getItem("userToken")
      const options={
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer " + usertoken
        },
        body: JSON.stringify({
          firstname: this.prenom,
          lastname: this.nom,
          email: this.email,
          })
      }

      const url="https://dw-s3-nice-tijean.osc-fr1.scalingo.io/user"
      const response= await fetch (url,options)
      const data= await response.json()
      console.log("update", data)

    }
  }
};
</script>

<style scoped>

.uppercase {
  text-transform: uppercase;
}

.no-deco {
  text-decoration: none;
  color: black;
}

.container{
  display: flex;
  justify-content: center;
  margin: 200px auto 100px auto;
  width: 650px;
  box-shadow: 4px 8px 16px 10px rgba(175,175,175,0.75);
  padding: 50px;
  color: #405e63;
}
input{
  padding: 5px;
  width: 582px;
  height: 30px;
  border: none;
  margin: 10px 0;
  outline: none;
}

textarea{
  padding: 5px;
  width: 582px;
  height: 160px;
  border: none;
  margin: 10px 0;
  outline: none;
}

label{
  margin-left: 10px;
}

.container-nomprenom{
  display: flex;
}

.container-nom{
    margin-left: 10px;
}

.container-nom input, .container-prenom input{
  width: 280px;
}
button{
  display: block;
  margin: 20px auto 0 auto;
  margin-right: auto;
  margin-left: auto;
  pointer-events: auto;
  background-color: white;
  border: none;
  color: 405e63;
  padding: 5px 80px;
  color: #405e63;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}
.error-message{
  text-align: center;
  font-size: 12px;
  color: red;
}

</style>
