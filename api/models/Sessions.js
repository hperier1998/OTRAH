let connection = require('../database')

class Sessions {
    static createSes (content, cb) {
        try{
            connection.query('INSERT INTO session SET Titre = ?, DateDebut = ?, DateFin = ?, Description = ?', 
            [content.titre, content.datedebut, content.datefin, content.description], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static titreModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET Titre = ? WHERE ID = ?', [content.titre, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static datedebutModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET DateDebut = ? WHERE ID = ?', [content.datedebut, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static datefinModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET DateFin = ? WHERE ID = ?', [content.datefin, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static descriptionModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET Description = ? WHERE ID = ?', [content.description, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }


    static getSession (cb){
        try {
            connection.query('SELECT Titre,DateDebut,DateFin,ID,SessionActive FROM session ORDER BY DATE(session.DateDebut) ASC LIMIT 5',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

}

module.exports = Sessions