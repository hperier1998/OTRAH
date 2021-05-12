<template>
  <div>
      <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand to="/">
        <img src="@/images/OTRAG_Logo.png" alt="OnTheRoadAGameLogo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Acceuil</b-nav-item>
          <b-nav-item href="/demo">Demo</b-nav-item>
          <b-nav-item href="/session">Session</b-nav-item>
          <b-nav-item href="/">Classement</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank">A Propos</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/goodies/" target="_blank">Goodies</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Utilisateur</em>
            </template>
            <b-dropdown-item href="#">Connexion</b-dropdown-item>
            <b-dropdown-item href="/inscription">Inscription</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <h1 class="text-center"> Les Prochaines Sessions </h1>

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


    <!-- Footer -->
    <footer class="bg-warning text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">A propos de On The Road a Game</h5>

            <p>
              On The Road a Game est un voyage-jeu organisé par l'agence JMB Voyages.
              Mi-voyage mystère, mi-voyage aventure, 100% découverte, cette expérience unique vous ramène aux origines du voyage : la rencontre...
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Lien Rapides</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="/" class="text-dark">Acceuil</a>
              </li>
              <li>
                <a href="/demo" class="text-dark">Défi Demo</a>
              </li>
              <li>
                <a href="/" class="text-dark">Session</a>
              </li>
              <li>
                <a href="/" class="text-dark">Classement</a>
              </li>
               <li>
                <a href="/" class="text-dark">A Propos</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

    </footer>
    <!-- Footer -->
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

  export default {
    components: { FlipCountdown },

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