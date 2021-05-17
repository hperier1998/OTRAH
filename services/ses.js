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

    defiNameselect(data){
        return api().post('/Definameselect', data)
    },

    getDefiByName(data){
        return api().post('/GetDefiByName', data)
    },

    addPic(data){
        return api().post('/AddPic', data)
    },
    
    sendPic(data){
        return api().post('/SendPic', data)
    }

}