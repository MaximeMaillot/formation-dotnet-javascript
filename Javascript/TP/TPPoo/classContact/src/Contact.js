export default class Contact {
    static _id = 0;
    constructor(titre, nom, prenom, dateNaissance, telephone, email) {
        this.id = ++this.constructor._id;
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
    }
}