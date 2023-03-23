export default class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, email, avatar) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 4);
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
        //filename
        this.avatar = avatar;
        this.created = new Date().toISOString();
        this.modified = new Date().toISOString();
    }
}