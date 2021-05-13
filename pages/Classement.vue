<template>
  <div>
    <Navbar/>

    <h1 class="text-center"> Placeholder Classement </h1>

    <div class="session">
      <h3 class="text-center">Session 1 : Session de Printemps</h3>
      <div class="sesbutton-position">
        <b-button pill variant="warning" size="lg" to="/">S'inscrire a cette session</b-button>
      </div>
      <no-ssr>
        <flip-countdown deadline="2022-12-25 00:00:00" class="countdown-pos"></flip-countdown>
      </no-ssr>
      <h3 class="text-center">Session 2 : Session d'Été</h3>
      <div class="sesbutton-position">
        <b-button pill variant="warning" size="lg" to="/">S'inscrire a cette session</b-button>
      </div>
      <no-ssr>
        <flip-countdown deadline="2023-3-25 00:00:00"></flip-countdown>
      </no-ssr>
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

  export default {
    components: { FlipCountdown, Navbar, Footer },

    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>