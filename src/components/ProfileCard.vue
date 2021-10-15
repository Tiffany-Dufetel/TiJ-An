<template>
  <div class="profileCard">
    <div class="profilePicture">
      <img
        src="https://www.joomeo.com/wp-content/uploads/2020/09/Joomeo-Photo-by-Max-Panama-TWTR.jpg"
        alt=""
      />
    </div>

    <div class="profileContent">
      <div class="pseudo-travellerType">
        <h2 class="affichagePseudo">MyWorld75{{ pseudo }}</h2>
        <p class="affichageTravellerTypeValue">{{ travellerTypeValue }}</p>
      </div>

      <p class="affichageVisitedCountry">
        pays visité(s) : Croatie, Inde, UK, USA{{ visitedCountry }}
      </p>
      <p class="affichageDescription">
        J'adore voyager! Suivez-moi, et voyagez avec moi!{{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profileCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  box-shadow: 2px 2px 7px #656565;
  margin: 0;
  padding: 10px;
}

.profileContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.profilePicture img {
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  width: 200px;
  height: 200px;
}

.profilePicture {
  width: 250px;
}

.pseudo-travellerType {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
