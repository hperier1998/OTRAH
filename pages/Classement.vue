<template>
  <div>
    <Navbar/>

    <h1 class="text-center"> Placeholder Classement </h1>
    <div v-if='!this.$store.state.user.isConnected'>
      <b-table striped hover :items="scores"></b-table>
    </div>

    <div v-if='this.$store.state.user.isConnected'>
      <b-table striped hover :items="scores"></b-table>
      <h2>Mon Classement</h2>
      <b-table striped hover :items="userscore"></b-table>
      
    </div>
    

    <Footer/>
    
  </div>
</template>

<style>
.container {
  min-height: 30vh
}

.session {
  text-align: center;
  margin-top: 3em;
}

.session-spacing {
  margin-bottom: 2.5em;
}

.concept-spacing {
  margin-top: 2.5em;
}

.sesbutton-position {
  text-align: center;
  margin-bottom: 2em;
}

</style>

<script>
  import FlipCountdown from 'vue2-flip-countdown'

  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  import score from '../services/score'

  export default {
    beforeMount(){
      this.getScore()
      this.userScore()
    },
    components: { FlipCountdown, Navbar, Footer },

    data() {
      return {
        slide: 0,
        sliding: null,
        scores: [],
        userscore:[]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      async getScore(){
        let response = await score.getScore()
        this.scores = response.data
      },
      async userScore(){
        let res = await score.userScore({id:this.$store.state.user.user.ID})
        this.userscore.push(res.data)
      }
    }
  }
</script>