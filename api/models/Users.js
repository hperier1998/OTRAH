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
}

module.exports = Users