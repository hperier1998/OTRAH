<template>
  <div>
    <Navbar/>

    <div class="spacing">
      <h1 class="text-center"> Liste des Défis </h1>

      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==0 && this.$store.state.user.user.isParticipant==1'>
        <div>
          <b-table striped hover :items="defilist"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill variant="warning" size="lg" @click='registerSubmit()'>S'inscrire a la session active</b-button>
        </div>
      </div>

      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==1'>
        <div>
          <b-table striped hover :items="defilist"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill variant="warning" size="lg" router-link :to="'Creationdefi'">Créer un défi</b-button>
        </div>
        <div class="sesbutton-position">
          <b-button pill variant="warning" size="lg" router-link :to="'Modifdefi'">Modifier un défi</b-button>
        </div>
      </div>

    </div>
    <Footer/>  
  </div>
</template>

<style>
.sesbutton-position {
  text-align: center;
  margin-bottom: 2em;
}

.spacing {
  margin-top: 10em;
}
</style>

<script>

  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  import ses from '../services/ses'

  export default {
    beforeMount(){
      this.getDefi()
    },

    data() {
        return {
          defilist: [],
        }
      },

    components: { Navbar, Footer },

    methods: {
        async getDefi(){
          let response = await ses.getDefi()
          this.defilist = response.data
        },
    }
  }
</script>