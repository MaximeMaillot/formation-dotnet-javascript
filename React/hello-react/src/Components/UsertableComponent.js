import React, { useState } from "react";
import Userrow from "./UserrowComponent"

function createUserRow(users) {
    let rows = [];
    users.forEach((user, index) => {
        rows.push(<Userrow user={user} key={index} />)
    });
    return rows
}

const Usertable = () => {
    const [users, setUsers] = useState([{ nom: "E", prenom: "F", age: 12 }, { nom: "A", prenom: "B", age: 40 }])
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody id={"coucou"} onClick={(e) => { setUsers([{ nom: "LOL", prenom: "THATS", age: 69 }, { nom: "TRUE", prenom: "BRO", age: 420 }]); document.getElementById("coucou").style.color = "red" }}>
                {createUserRow(users)}
            </tbody>
        </table>
    )
}

export default Usertable;