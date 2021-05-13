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
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Bite en bois"
        text="Viktor."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <h1 class="text-center"> On The Road a Game : un jeu d'aventure hors du commun pour vivre le voyage autrement </h1>


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
          <b-col>Column</b-col>
          <b-col>Column</b-col>
          <b-col>Column</b-col>
        </b-row>
      </b-container>
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
          <b-col>Column</b-col>
          <b-col>Column</b-col>
          <b-col>Column</b-col>
        </b-row>
      </b-container>
    </div>

    <div class="session">
      <h2 class="session-spacing">Prochaine Session: </h2>
      <h3 class="text-center">Session 1 : Session de Printemps</h3>
      <no-ssr>
        <flip-countdown deadline="2022-12-25 00:00:00"></flip-countdown>
      </no-ssr>
      <h3 class="text-center">Session 2 : Session d'Été</h3>
      <no-ssr>
        <flip-countdown deadline="2023-3-25 00:00:00"></flip-countdown>
      </no-ssr>
    </div>

    <div class="sesbutton-position">
      <b-button pill variant="warning" size="lg" router-link :to="'Session'">S'inscrire a une session</b-button>
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