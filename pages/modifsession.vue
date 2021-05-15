<template>
  <div>
    <Navbar/>
    
    <div>
      <b-form @submit="onSubmit" v-if="show">

        <b-form-group id="input-group-1" label="Titre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Entrez le titre de la session"
          ></b-form-input>
        </b-form-group>

          <b-form-group id="input-group-2" label="Date de Debut:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.datestart"
              type="date"
              placeholder="Entrez la date de debut de session"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Date de Fin:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.dateend"
              type="date"
              placeholder="Entrez la date de fin de session"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Description:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.desc"
              type="text"
              placeholder="Entrez la description"
            ></b-form-input>
          </b-form-group>

        <div class="text-center">
          <b-button type="submit" variant="primary">Submit</b-button>
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
    beforeMount() {
      this.getSessionNames()
    },

    components: { Navbar, Footer },

    data() {
      return {
        form: {
          title: '',
          datestart: '',
          dateend: '',
          desc: '',
        }
      }
    },

    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.modifySes()
        this.$router.push({name: 'session'})
      },

      async modifySes(){
        await ses.modifySes({
          titre:this.form.title,
          datedebut:this.form.datestart,
          datefin:this.form.dateend,
          description:this.form.desc
        }).then(response => {console.log(response)})
      },

      async getSessionNames(){
        let response = await ses.getSessionNames()
        response.data.forEach(element => {console.log(element), this.sessionnames.push(element)});
        console.log('patate')
        console.log(this.sessionnames)
      }
    
    }
  }
</script>