<template>
<Navbar
    buttonName="coucou"/>
  <div class="container">
    <form>
      <label for="prenom">Prénom*</label><br />
      <input id="prenom " type="text" v-model="prenomLog" placeholder="Votre prenom" required /><br />

      <label for="nom">Nom*</label><br />
      <input id ="nom" type="text" v-model="nomLog" placeholder="Votre nom" required /><br />

      <label for="email">Adresse mail*</label><br />
      <input id="email" type="mail" v-model="emailLog" placeholder="Votre adresse mail" required /><br />

      <label for="pseudo">Pseudo*</label><br />
      <input id="pseudo" type="text" v-model="pseudoLog" placeholder="Votre pseudo" required /><br />

      <label for="password">Mot de passe (Doit contenir 8 caracteres minimum)</label><br />
      <input id="password" type="password" v-model="passwordLog" placeholder="Votre mot de passe"  required /><br />

      <label for="birthday">Date de naissance</label><br />
      <input type="date" id="birthday" v-model="birthdayLog"><br />
  
      <p>Sexe</p>
      <select v-model="sexeLog">
        <option disabled value="">Sexe</option>
        <option>Masculin</option>
        <option>Feminin</option>
      </select><br />
      <button @click="btnLogin">S'inscrire</button>
      {{messageError}}
    </form>
  </div>
  <Footer/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"

export default {
    data(){
      return{
        prenomLog: "",
        nomLog:"",
        emailLog: "",
        pseudoLog: "",
        passwordLog: "",
        birthdayLog: "",
        sexeLog:"",
        messageError:"",
      }
    },
    components:{
        "Navbar": Navbar,
        "Footer": Footer,
    },

    methods:{
      async btnLogin(){
        const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/register"
        const options = {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            firstname: this.prenomLog,
            lastname: this.nomLog,
            email: this.emailLog,
            password: this.passwordLog,
          }),
        }

        const response = await fetch (url, options)
        const dataLogin = await response.json()
        console.log(dataLogin)

        this.messageError = dataLogin.message

      }
    }

}
</script>

<style>

</style>