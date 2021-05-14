export const state = () => ({
    user: null,
    isConnected: false
  })
  
  export const mutations = {
    add(state, usr) {
      state.user = usr
      if(usr){
        state.isConnected = true
      }
      else{
        state.isConnected = false
      }
    },

    logout(state){
      state.user = null
      state.isConnected = false
    }
  }