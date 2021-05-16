let connection = require('../database')

class Sessions {
    static createSes (content, cb) {
        try{
            connection.query('INSERT INTO session SET Titre = ?, DateDebut = ?, DateFin = ?, SessionActive = ?', 
            [content.titre, content.datedebut, content.datefin, content.sessionactive], 
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
            connection.query('UPDATE session SET Titre = ? WHERE Titre = ?', [content.titre, content.selecttitle], 
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
            connection.query('UPDATE session SET DateDebut = ? WHERE Titre = ?', [content.datedebut, content.selecttitle], 
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
            connection.query('UPDATE session SET DateFin = ? WHERE Titre = ?', [content.datefin, content.selecttitle], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static sessionstateModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET SessionActive = ? WHERE Titre = ?', [content.sessionactive, content.selecttitle], 
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

    static getSessionname (cb){
        try {
            connection.query('SELECT Titre FROM session',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static getDefi (cb){
        try {
            connection.query('SELECT Titre,Description FROM defi',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static createDefi (content, cb) {
        try{
            connection.query('INSERT INTO defi SET Titre = ?, Description = ?', 
            [content.titredefi, content.descriptiondefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static getDefiname (cb){
        try {
            connection.query('SELECT Titre FROM defi',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static defititleModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE defi SET Titre = ? WHERE Titre = ?', [content.titredefi, content.selecttitledefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static defidescModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE defi SET Description = ? WHERE Titre = ?', [content.descriptiondefi, content.selecttitledefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = Sessions