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
        <b-form-group id="input-group-1" label="Prénom:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.firstname"
            placeholder="Entrez votre prénom"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nom:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.lastname"
            placeholder="Entrez votre nom"
            required
          ></b-form-input>
        </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Email:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.email"
              type="email"
              placeholder="Entrez votre e-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Telephone:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.tel"
              type="tel"
              placeholder="Entrez votre numero de telephone"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Mot de passe:" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.password"
              type="password"
              placeholder="Entrez votre mot de passe"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Date de naissance:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.dob"
              type="date"
              placeholder="Entrez votre date de naissance"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Adresse:" label-for="input-7">
            <b-form-input
              id="input-7"
              v-model="form.address"
              type="text"
              placeholder="Entrez votre adresse"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label="Ville:" label-for="input-8">
            <b-form-input
              id="input-8"
              v-model="form.city"
              type="text"
              placeholder="Entrez votre ville"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-9" label="Code Postal:" label-for="input-9">
            <b-form-input
              id="input-9"
              v-model="form.postal"
              type="text"
              placeholder="Entrez votre code postal"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-10" label="Pays:" label-for="input-10">
            <b-form-select
              id="input-10"
              v-model="form.country"
              :options="countries"
              required
            ></b-form-select>
          </b-form-group>

        <div class="text-center">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
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
  padding: 25px;
}
</style>

<script>

  import auth from '../services/auth'

  export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          email: '',
          tel: '',
          password: '',
          dob: '',
          address: '',
          city: '',
          postal: '',
          country: null,
        },
        countries: [{ text: 'Selectionez un pays', value: null }, 'France', 'Royaume Uni', 'Etat-Unis', 'Australie', 'Autre'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.register()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.email = null
        this.form.tel = null
        this.form.password = null
        this.form.dob = null
        this.form.address = ''
        this.form.city = ''
        this.form.postal = ''
        this.form.country = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async register(){
        await auth.register({
          prenom:this.form.firstname,
          nom:this.form.lastname,
          email:this.form.email,
          tel:this.form.tel,
          password:this.form.password,
          datenaissance:this.form.dob,
          adresse:this.form.address,
          ville:this.form.city,
          codepostal:this.form.postal,
          pays:this.form.country,
        })
      }
    }
  }
</script>