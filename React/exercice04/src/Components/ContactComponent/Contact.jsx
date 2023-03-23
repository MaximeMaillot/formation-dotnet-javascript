import React, { useState } from 'react';
import "./Contact.css";


const Contact = ({ contact, deleteContact, updateContact }) => {
    const [modify, changeModify] = useState(false)
    const contactInput = JSON.parse(JSON.stringify(contact))

    return modify ? (
        <tr>
            <td ><input type="text" onChange={(e) => { contactInput.nom = e.target.value }} defaultValue={contactInput.nom} /></td>
            <td ><input type="text" onChange={(e) => { contactInput.prenom = e.target.value }} defaultValue={contactInput.prenom} /></td>
            <td><input type="email" onChange={(e) => { contactInput.email = e.target.value }} defaultValue={contactInput.email} /></td>
            <td ><input type="tel" onChange={(e) => { contactInput.telephone = e.target.value }} defaultValue={contactInput.telephone} /></td>
            <td className="td-cancel" onClick={() => { changeModify(!modify) }}>Annuler</td>
            <td className="td-validate" onClick={() => { updateContact(contact, contactInput); changeModify(!modify) }}>Valider</td>
        </tr>
    ) :
        (
            <tr>
                <td >{contact.nom}</td>
                <td >{contact.prenom}</td>
                <td >{contact.email}</td>
                <td >{contact.telephone}</td>
                <td className="td-modify" onClick={() => { changeModify(!modify) }}>Modifier</td>
                <td className="td-delete" onClick={() => deleteContact(contact)}>Supprimer</td>
            </tr>
        )
};

export default Contact;