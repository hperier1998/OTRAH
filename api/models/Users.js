let connection = require('../database')

class Users {
    static create (content, cb) {
        try{
            connection.query('INSERT INTO utilisateur SET Password = ?, Email = ?, Nom = ?, Prenom = ?, Adresse = ?, Ville = ?, CodePostal = ?, Pays = ?, Tel = ?, DateNaissance = ?', 
            [content.password, content.email, content.nom, content.prenom, content.adresse, content.ville, content.codepostal, content.pays, content.tel, content.datenaissance], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static login (content, cb) {
        try {            
            connection.query('SELECT * FROM utilisateur WHERE email = ? LIMIT 1', [content.email], 
            (err, result) => {
                if(err) throw err
                
                if (result.length > 0 && content.email == result[0].Email && content.password == result[0].Password) {
                    cb(result)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static modify (content, cb) {
        try {            
            connection.query('UPDATE utilisateur SET Password = ?, Email = ?, Nom = ?, Prenom = ?, Adresse = ?, Ville = ?, CodePostal = ?, Pays = ?, Tel = ?, DateNaissance = ?', 
            [content.password, content.email, content.nom, content.prenom, content.adresse, content.ville, content.codepostal, content.pays, content.tel, content.datenaissance], 
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

module.exports = Users