let Users = require('../models/Users')

module.exports = {
    async register(req, res){
        try {
            await Users.create(req.body, function(){
                res.send({Message:'User created.'})
            })
        } catch (error) {
            
        }
    }
}