let Users = require('../models/Users')

module.exports = {
    async register(req, res){
        try {
            await Users.create(req.body, function(){
                res.send({Message:'User created.'})
            })
        } catch (error) {
            
        }
    },

    async login(req, res){
        try {
            await Users.login(req.body, function(data){
                res.send(data)
            })
        } catch (error) {
            
        }
    }
}