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
    }

    // remove(state, { user }) {
    //   state.user.splice(state.user.indexOf(user), 1)
    // },

    // toggle(user) {
    //   user.done = !user.done
    // }
  }