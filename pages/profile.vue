<template>
  <div>
    <Navbar/>
    
    <div>
      <h2> Prenom: </h2>
      <h2> Nom: </h2>
      <h2> Date de Naissance: </h2>
      <h2> E-mail: </h2>
      <h2> Numero de telephone: </h2>
      <h2> Adresse: </h2>
      <h2> Ville: </h2>
      <h2> Code Postal: </h2>
      <h2> Pays: </h2>

    </div>


    <Footer/>

  </div>
</template>

<script>
  import Navbar from './headernavbar.vue'
  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer },

    mounted:function(){
      document.getElementsByTagName("h2")[0].innerHTML+=this.$store.state.user.user[0].Prenom
      document.getElementsByTagName("h2")[1].innerHTML+=this.$store.state.user.user[0].Nom
      document.getElementsByTagName("h2")[2].innerHTML+=this.$store.state.user.user[0].DateNaissance.substring(0,10)
      document.getElementsByTagName("h2")[3].innerHTML+=this.$store.state.user.user[0].Email
      document.getElementsByTagName("h2")[4].innerHTML+=this.$store.state.user.user[0].Tel
      document.getElementsByTagName("h2")[5].innerHTML+=this.$store.state.user.user[0].Adresse
      document.getElementsByTagName("h2")[6].innerHTML+=this.$store.state.user.user[0].Ville
      document.getElementsByTagName("h2")[7].innerHTML+=this.$store.state.user.user[0].CodePostal
      document.getElementsByTagName("h2")[8].innerHTML+=this.$store.state.user.user[0].Pays
    }
  }
</script>