import React, { useState } from 'react';
import "./Formulaire.css";

const Formulaire = () => {
    function handleSubmit(e) {
        e.preventDefault();
        setNom(e.target.nom.value);
        setPrenom(e.target.prenom.value);
        setEmail(e.target.email.value);
        setDemande(e.target.demande.value);
        setTextarea(e.target["form-textarea"].value);
    }

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [email, setEmail] = useState();
    const [demande, setDemande] = useState();
    const [textarea, setTextarea] = useState();

    return (
        <div className='container'>
            <h2>Les Formulaires en React</h2>
            <div className="card formulaire">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="mb-3">
                            <label htmlFor="nom">Nom :</label>
                            <input type="text" name="nom" id="nom" className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prenom">Prénom :</label>
                            <input type="text" name="prenom" id="prenom" className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email :</label>
                            <input type="email" name="email" id="email" className='form-control' />
                        </div>
                        <select name="demande" id="demande" className='form-select' defaultValue="-1">
                            <option disabled value="-1">Choisissez le type de demande</option>
                            <option value="1">Renseignement à propos de la formulation</option>
                            <option value="2">Demande de rendez-vous</option>
                            <option value="3">Autres demandes...</option>
                        </select>
                        <label htmlFor="form-textarea">Commentaires</label>
                        <textarea name="form-textarea" id="form-textarea" cols="30" rows="10" className='form-control'></textarea>
                        <button className='btn btn-secondary' type='submit'>Valider</button>
                    </div>
                </form>
            </div>
            <h2>Les Formulaires en React - State</h2>
            <div className="card formulaire">
                <div className="form-control">
                    <div className="mb-3">
                        <label htmlFor="nomState">Nom :</label>
                        <input type="text" name="nomState" id="nomState" className='form-control' placeholder={nom} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenomState">Prénom :</label>
                        <input type="text" name="prenomState" id="prenomState" className='form-control' placeholder={prenom} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailState">Email :</label>
                        <input type="email" name="emailState" id="emailState" className='form-control' placeholder={email} />
                    </div>
                    <select name="demandeState" id="demandeState" className='form-select' value={demande}>
                        <option disabled value="-1">Choisissez le type de demande</option>
                        <option value="1">Renseignement à propos de la formulation</option>
                        <option value="2">Demande de rendez-vous</option>
                        <option value="3">Autres demandes...</option>
                    </select>
                    <label htmlFor="form-textareaState">Commentaires</label>
                    <textarea name="form-textareaState" id="form-textareaState" cols="30" rows="10" className='form-control' defaultValue={textarea}></textarea>
                    <button className='btn btn-secondary' type='submit'>Valider</button>
                </div>
            </div>
        </div>
    );
};

export default Formulaire;