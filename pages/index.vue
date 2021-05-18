<template>
  <div>
    <Navbar/>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="At Home"
          text="New edition"
          img-src="https://jmbvoyages.fr/wp-content/uploads/2018/10/bandeau-on-the-road-reseaux-sociaux.jpg"
        ></b-carousel-slide>

        <!-- Text slides with image -->
        <b-carousel-slide
          caption="At Home"
          text="New edition"
          img-src="https://blogvoyages.fr/wp-content/uploads/2015/07/RoadTrip-USA-1280x720.jpg"
        ></b-carousel-slide>

        <!-- Text slides with image -->
        <b-carousel-slide
          caption="At Home"
          text="New edition"
          img-src="https://finistere2point9.fr/wp-content/uploads/2020/05/finistere-van.jpg"
        ></b-carousel-slide>

        <!-- Text slides with image -->
        <b-carousel-slide
          caption="At Home"
          text="New edition"
          img-src="https://camp-us.fr/wp-content/uploads/2020/12/artisans2.png"
        ></b-carousel-slide>

        <!-- Text slides with image -->
        <b-carousel-slide
          img-src="https://fortlointain.com/wp-content/uploads/road-trip-en-californie-route-joshua-tree-1.jpg"
        ></b-carousel-slide>
    </b-carousel>

    <h1 class="text-center"> On The Road a Game : At Home </h1>


    <div class="text-center">
      <h2 class="concept-spacing">Le Concept </h2>
      <b-container>
        <b-row>
          <b-col>
            <b-img src="@/images/Flashcard1.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col>
            <b-img src="@/images/Flashcard2.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col>
            <b-img src="@/images/Flashcard3.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <div class="w-100"></div>
          <b-col>Déstination inconnu</b-col>
          <b-col>Challenge</b-col>
          <b-col>Plusieurs jours</b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col>
            <b-img src="@/images/Flashcard4.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col>
            <b-img src="@/images/Flashcard2.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col>
            <b-img src="@/images/Flashcard5.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <div class="w-100"></div>
          <b-col>Défi</b-col>
          <b-col>Récompense</b-col>
          <b-col>Attractif</b-col>
        </b-row>
      </b-container>
    </div>

    <div class="sesbutton-position">
      <b-button pill variant="warning" size="lg" router-link :to="'Session'">Voir les Sessions</b-button>
    </div>

    <Footer/>
  </div>
</template>

<style>
.session {
  text-align: center;
  margin-top: 3em;
}

.session-spacing {
  margin-bottom: 2.5em;
}

.concept-spacing {
  margin-top: 2.5em;
  margin-bottom: 2.5em;
}

.sesbutton-position {
  text-align: center;
  margin-top: 5em;
  margin-bottom: 5em;
}

</style>

<script>
  import Navbar from './headernavbar.vue'
  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer },

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
</script>npm ru