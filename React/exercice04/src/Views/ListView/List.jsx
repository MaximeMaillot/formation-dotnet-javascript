import React from 'react';
import Contact from '../../Components/ContactComponent/Contact';
import "./List.css";

const List = ({ contacts, updateContacts }) => {
    /**
     * 
     * @param {*} contact 
     */
    const deleteContact = (contact) => {
        const filteredContacts = contacts.filter((c) => {
            return c !== contact
        })
        updateContacts(filteredContacts)
    }

    /**
     * 
     * @param {*} oldContact 
     * @param {*} newContact 
     */
    const updateContact = (oldContact, newContact) => {
        const newContacts = []
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i] === oldContact) {
                newContacts.push(newContact)
            } else {
                newContacts.push(contacts[i])
            }
        }
        updateContacts(newContacts)
    }

    return contacts.length > 0 ? (
        <React.Fragment>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th className='th-width'>Nom</th>
                        <th className='th-width'>Prénom</th>
                        <th className='th-width'>Email</th>
                        <th className='th-width'>Téléphone</th>
                        <th className="th-width th-centered" colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact, index) => {
                            return <Contact contact={contact} key={index} deleteContact={deleteContact} updateContact={updateContact}></Contact>
                        })
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <button className='btn btn-secondary mt-3 bouton-clear' onClick={() => { updateContacts([]) }}>Clear</button>
            </div>
        </React.Fragment >
    ) : (
        <div className='text-center'><h2>Pas de contacts</h2></div>
    )
};

export default List;