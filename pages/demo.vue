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
          <b-nav-item href="/">A Propos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
            <b-dropdown-item href="/register">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <h1 class="demo-title">Titre de la Demo</h1>
      <h5 class="text-center"> Ici vous pouvez experiencé On The Road A Game : At Home avant de vous inscricre! </h5>
      <h3 class="defi-title"> Le Défi </h3>
      <p class="description-position"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu nisi. Phasellus vitae aliquet ipsum, ut pretium sapien. In fermentum sem et accumsan venenatis. Duis dignissim sed felis vitae ultricies. Phasellus urna diam, vulputate eu rhoncus eu, tristique eu quam. Pellentesque nec lectus arcu. Vivamus nibh purus, dignissim eu eleifend in, sodales nec orci. Integer elementum iaculis faucibus. Praesent iaculis sit amet mi a sodales. In hac habitasse platea dictumst. Cras a eros feugiat, gravida ligula in, vestibulum dolor. Nulla vestibulum, leo non euismod facilisis, neque sapien interdum leo, ut ultricies risus leo id felis. Suspendisse diam massa, semper in accumsan quis, sodales sed velit. </p>
      <p class="description-position"> Praesent lobortis, arcu interdum rhoncus elementum, libero ipsum volutpat magna, in aliquet tellus enim id nulla. Proin interdum commodo enim, non imperdiet nisl viverra quis. Nulla non tortor facilisis erat posuere sagittis. Praesent est lectus, varius eu lectus auctor, luctus condimentum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed tempus metus. Pellentesque a tellus non augue dictum pretium. Sed vestibulum nunc non ex aliquam, rutrum bibendum ligula dictum. Aliquam id leo non ex iaculis viverra. Ut facilisis lectus eget vestibulum consequat. Vivamus nec accumsan libero, a tincidunt ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut enim tortor. Vestibulum congue finibus dolor in euismod.</p>
    </div>

    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowfullscreen
      ></b-embed>
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
.demo-title {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

.defi-title {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

.description-position {
  text-align: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 1.5em;
}


</style>

<script>
  export default {}
</script>