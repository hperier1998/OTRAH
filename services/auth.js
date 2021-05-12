import api from './api'

export default {
    register(data){
        console.log(data)
        return api().post('/Users', data)
    },

    login(data){
        return api().post('/Login', data)
    }
}