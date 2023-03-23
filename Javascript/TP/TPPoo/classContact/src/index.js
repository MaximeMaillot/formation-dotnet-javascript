import Contact from "./Contact.js";

const Form = {
    nom: document.querySelector("#nom"),
    prenom: document.querySelector("#prenom"),
    dateNaissance: document.querySelector("#date"),
    telephone: document.querySelector("#tel"),
    email: document.querySelector("#mail")
}

const FormAlert = document.querySelector("#form-alert")

const Contacts = document.querySelector("#contacts");

const Ajouter = document.querySelector("#add");
const Show = document.querySelector("#show");

let timeout;

let contacts = [];

function init() {
    fetch("http://localhost:7777", {
        headers: {
            Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsIm5hbWUiOiJKZWFuIGJvbiIsImVtYWlsIjoiamVhbmJvbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImN1aWxsZXJlIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3NzY2NTA5MSwiZXhwIjoxNjc3NjY2ODkxfQ.rNvs-PmUwfY8dyjkg1Iv5t17WRRZz7WJgjXK13-AXmU"
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            contacts = data.contacts;
            contacts.forEach((contact) => {
                addContactViaApi(new Contact("Mr", contact.nom, contact.prenom, contact.dateNaissance, contact.telephone, contact.email))
            })
        })
    Ajouter.addEventListener("click", addContact)
    Show.addEventListener("click", updateView)
}

function triggerAlert(msg, time = 3000) {
    FormAlert.innerText = msg
    FormAlert.style.display = "block"
    timeout = setTimeout(() => {
        FormAlert.style.display = "none"
    }, time
    )

}

function updateView() {
    Form.titre = document.querySelector("input[name=titre]:checked")
    console.log(Form)
}

function clearForm() {
    for (const key in Form) {
        if (key != "titre") {
            Form[key].value = ""
        }
    }

}

function validateData() {
    for (const key in Form) {
        if (Form[key].value == "" || !Form[key].checkValidity()) {
            console.log(key, Form[key].value, !Form[key].checkValidity())
            triggerAlert("Formulaire non valide")
            return false
        }
    }
    return true;
}

function addContactViaApi(contact) {
    contacts.push(contact)
    const tr = document.createElement("tr")
    tr.setAttribute("data-id", contact.id)
    Contacts.appendChild(tr)
    for (const key in contact) {
        const td = document.createElement("td")
        td.innerText = contact[key]
        tr.appendChild(td)
    }
    const td = document.createElement("td")
    const deleteDiv = document.createElement("i")
    deleteDiv.classList.add(["fa-solid"], ["fa-trash"])
    td.appendChild(deleteDiv)
    tr.appendChild(td)
    deleteDiv.addEventListener("click", () => {
        let index = parseInt(tr.getAttribute("data-id"))
        contacts = contacts.filter((c) => {
            return c.id != Number(index)
        })
        tr.remove()
    })
}

function addContact() {
    Form.titre = document.querySelector("input[name=titre]:checked")
    if (!validateData()) {
        return false
    }
    let contact = new Contact(Form.titre.value, Form.nom.value, Form.prenom.value, Form.dateNaissance.value, Form.telephone.value, Form.email.value)
    contacts.push(contact)
    const tr = document.createElement("tr")
    tr.setAttribute("data-id", contact.id)
    Contacts.appendChild(tr)
    for (const key in contact) {
        const td = document.createElement("td")
        td.innerText = contact[key]
        tr.appendChild(td)
    }
    const td = document.createElement("td")
    const deleteDiv = document.createElement("i")
    deleteDiv.classList.add(["fa-solid"], ["fa-trash"])
    td.appendChild(deleteDiv)
    tr.appendChild(td)
    deleteDiv.addEventListener("click", () => {
        let index = parseInt(tr.getAttribute("data-id"))
        contacts = contacts.filter((c) => {
            return c.id != Number(index)
        })
        tr.remove()
    })
    clearForm()
}

init()