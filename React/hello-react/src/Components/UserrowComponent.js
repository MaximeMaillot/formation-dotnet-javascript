import React from "react";

const Userrow = ({ user }) => {
    console.log(user)
    return (
        <tr>
            <td>{user.nom}</td>
            <td>{user.prenom}</td>
            <td>{user.age}</td>
        </tr>
    )
}

export default Userrow;