let Sessions = require('../models/Sessions')

module.exports = {
    async registerSes(req, res){
        try {
            await Sessions.createSes(req.body, function(){
                res.send({Message:'Session created.'})
            })
        } catch (error) {
            
        }
    },

    async modifySes(req, res){
        try {
            if(req.body.titre != ''){
                await Sessions.titreModify(req.body, function(callback){})
            }
            if(req.body.datedebut != ''){
                await Sessions.datedebutModify(req.body, function(callback){})
            }
            if(req.body.datefin != ''){
                await Sessions.datefinModify(req.body, function(callback){})
            }
            if(req.body.description != ''){
                await Sessions.descriptionModify(req.body, function(callback){})
            }
            res.send('Session mis a jour')
        } catch (error) {
            console.log(err)
        }
    },

    async getSession(req,res){
        await Sessions.getSession(function(data){
            let sessionStore = []
            let i = 1
            data.forEach(ses => {
                let session = {
                    Titre:ses.Titre,
                    DateDebut:ses.DateDebut,
                    DateFin:ses.DateFin,
                    SessionActive:ses.SessionActive
                }
                sessionStore.push(session)
                i+=1
            });
            res.send(sessionStore)
        })
    },
}