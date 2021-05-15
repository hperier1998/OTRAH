<template>
  <div>
    <Navbar/>
    
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Titre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Entrez le titre de la session"
            required
          ></b-form-input>
        </b-form-group>

          <b-form-group id="input-group-2" label="Date de Debut:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.datestart"
              type="date"
              placeholder="Entrez la date de debut de session"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Date de Fin:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.dateend"
              type="date"
              placeholder="Entrez la date de fin de session"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Description:" label-for="input-5">
            <b-form-input
              id="input-4"
              v-model="form.desc"
              type="text"
              placeholder="Entrez la description"
              required
            ></b-form-input>
          </b-form-group>

        <div class="text-center">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </div>

    <Footer/>

  </div>
</template>

<script>

  import ses from '../services/ses'
  import Navbar from './headernavbar.vue'
  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer },

    data() {
      return {
        form: {
          title: '',
          datestart: '',
          dateend: '',
          desc: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.registerSes()
        this.$router.push({name: 'session'})
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.datestart = null
        this.form.dateend = null
        this.form.desc = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async registerSes(){
        await ses.registerSes({
          titre:this.form.title,
          datedebut:this.form.datestart,
          datefin:this.form.dateend,
          description:this.form.desc
        }).then(response => {console.log(response)})
      }
    }
  }
</script>