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
          <b-nav-item href="/">Session</b-nav-item>
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

    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="E-mail"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Mot de passe"
            required
          ></b-form-input>
        </b-form-group>

        <div class="text-center">
          <b-button type="submit" variant="primary">Se Connecter</b-button>
          <b-button variant="primary" to="/profile">Mot de Passe Oublier</b-button>
        </div>
      </b-form>
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
  margin-top: 15em;
  margin-top: 15em;
  padding: 50px;
}
</style>


<script>
  export default {
    data() {
      return {
        form: {
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = null
        this.form.password = null

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>