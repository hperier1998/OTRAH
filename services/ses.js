import api from './api'

export default {
    registerSes(data){
        console.log(data)
        return api().post('/Createses', data)
    },

    modifySes(data){
        return api().post('/Modifyses', data)
    },

    getSession(){
        return api().get('/Fetchses')
    },

    getSessionnames(){
        return api().get('/Fetchsesname')
    },

    getDefi(){
        return api().get('/Fetchdefi')
    }, 

    registerDefi(data){
        console.log(data)
        return api().post('/Createdefi', data)
    },

    getDefinames(){
        return api().get('/Fetchdefiname')
    },

    modifyDefi(data){
        return api().post('/Modifydefi', data)
    },

}