<template>
<Navbar
  buttonName="SE CONNECTER / S'INSCRIRE"/>

  <div class="container">
    <label for="id">Identifiant</label>
    <input type="email" v-model="email" placeholder="Votre adresse mail" name="id"/><br/>

    <label for="password">Mot de passe</label>
    <input type="password" v-model="password" placeholder="Votre mot de pass" name="password"/><br />
    
    <p>Se souvenir de moi</p>
    <input type="checkbox" id="checkbox"><br />
    
    <button @click="btnConnexion">Connexion</button>
        {{messageError}}

    <router-link to="/formulaire-inscription">Je n'ai pas de compte, je souhaite m'insrire</router-link>
  </div>

<Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  data(){
    return{
      email: "",
      password: "",
      messageError: "",
      token: "",
    }
  },

  components: { 
    "Navbar": Navbar,
    "Footer": Footer,
  },
  methods: {
    async btnConnexion(){
      const url = "https://dw-s3-nice-tijean.osc-fr1.scalingo.io/login"
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      }

      const response = await fetch (url, options)
      const dataLogin = await response.json()

      this.messageError = dataLogin.message
      this.token = dataLogin.token
      localStorage.setItem("userToken", this.token)
      console.log(this.token)
    }
  }
  
}
</script>

<style>

</style>