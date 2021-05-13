<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand router-link :to="'/'">
        <img src="@/images/OTRAG_Logo.png" alt="OnTheRoadAGameLogo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link :to="'/'">Acceuil</b-nav-item>
          <b-nav-item router-link :to="'Demo'">Demo</b-nav-item>
          <b-nav-item router-link :to="'Session'">Session</b-nav-item>
          <b-nav-item router-link :to="'Classement'">Classement</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank">A Propos</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/goodies/" target="_blank">Goodies</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if='!this.$store.state.user.isConnected'>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Utilisateur</em>
            </template>
            <b-dropdown-item router-link :to="'Connexion'">Connexion</b-dropdown-item>
            <b-dropdown-item router-link :to="'Inscription'">Inscription</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if='this.$store.state.user.isConnected'>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Utilisateur</em>
            </template>
            <b-dropdown-item router-link :to="'Connexion'">Mon Profile</b-dropdown-item>
            <b-dropdown-item router-link :to="'Inscription'">Deconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
</style>

<script>

</script>