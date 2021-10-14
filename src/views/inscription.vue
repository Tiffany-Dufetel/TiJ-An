<template>
  <div class="about">
    <form>
      <p>Prenom*</p>
      <input type="text" v-model="text" placeholder="Votre prenom" required />
      <p>Nom*</p>
      <input type="text" v-model="text" placeholder="Votre nom" required />
      <p>Adresse mail*</p>
      <input
        type="mail"
        v-model="email"
        placeholder="Votre adresse mail"
        required
      />
      <p>Pseudo*</p>
      <input type="text" v-model="text" placeholder="Votre pseudo" required />
      <p>Mot de passe (Doit contenir 8 caracteres minimum)</p>
      <input
        type="password"
        v-model="text"
        placeholder="Votre mot de passe"
        required
      />
      <p>Date de naissance</p>
      <input type="date" id="start" name="trip-start" />
      <br />
      <p>Sexe</p>
      <select v-model="selected">
        <option disabled value="">Sexe</option>
        <option>Masculin</option>
        <option>Feminin</option>
      </select>
      <br />
      <br />
      <button>S'inscrire</button>
    </form>
  </div>
</template>
