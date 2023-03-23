import React from 'react';
import "./AddPerson.css";

const AddPerson = ({ contacts, updateContacts }) => {
    function handleSubmit(e) {
        e.preventDefault();
        updateContacts(
            [...contacts, {
                nom: e.target.nom.value,
                prenom: e.target.prenom.value,
                email: e.target.email.value,
                telephone: e.target.telephone.value
            }]
        )
        e.target.reset()
    }

    return (
        <div className="container text-center">
            <form className="row g-3" onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <div className='col-6'>
                    <label className="form-label" htmlFor="nom">Nom</label>
                    <input className="form-control" type="text" id="nom" name='nom' />
                </div>
                <div className='col-6'>
                    <label className="form-label" htmlFor="prenom">Prénom</label>
                    <input className="form-control" type="text" id="prenom" name='prenom' />
                </div>
                <div className='col-6'>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" name='email' />
                </div>
                <div className='col-6'>
                    <label className="form-label" htmlFor="telephone">Téléphone</label>
                    <input className="form-control" type="tel" id='telephone' name='telephone' />
                </div>
                <div className='text-center'>
                    <button className='mt-3 btn btn-secondary' type='submit'>Valider</button>
                </div>
            </form>
        </div >
    );
};

export default AddPerson;