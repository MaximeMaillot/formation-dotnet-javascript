import express from "express"
import ip from "ip"
import { dirname } from "path";
import cors from "cors";
import * as url from 'url';
import { success } from "./method.js";
import fs from "fs"

const app = express()
const port = 7777
const ipAdress = ip.address()
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1) Récuperer les données du JSON
let dataJSON = fs.readFileSync("./data/cours.json", (err, data) => {
    if (err == null) {
        return data;
    }
    else
        console.log(err);
});

// 2) Reconstruire les objets JS
const data = JSON.parse(dataJSON);

let lastId = data.length

function addCours(newCours) {
    data.push(newCours);
    //console.table(myList);

    // 4) Update du fichier JSon
    dataJSON = JSON.stringify(newCours);
    fs.writeFileSync("./data/cours.json", dataJSON)
}


app.use(express.json())

// GET All
app.get("/data", (req, res) => {
    res.json(success("Tout les cours", data))
})

// GET by ID
app.get("/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const find = data.find((d) => {
        return d.id == id
    })
    let message = find ? `Un cours à été trouvé avec l'id ${id}` : `Aucun cours avec l'id ${id}`
    res.json(success(message, find))
})

//GET by difficulty
app.get("/data/difficulty/:difficulty", (req, res) => {
    const difficulty = parseInt(req.params.difficulty);
    const filter = data.filter((d) => {
        return d.difficulte == difficulty
    })
    let message = filter != [] ? `Le(s) cours trouvé(s) avec la difficulté ${difficulty}` : `Aucun cours avec la difficulté ${difficulty}`
    res.json(success(message, find))
})


//Get by name
app.get("/data/name/:name", (req, res) => {
    const name = req.params.name;
    const find = data.filter((d) => {
        return d.name.toLowerCase() == name.toLowerCase()
    })
    let message = find ? `Le(s) cours trouvé(s) avec le nom ${name}` : `Aucun cours avec le nom ${name}`
    res.json(success(message, find))
})

//GET by price
app.get("/data/price/:minPrice/:maxPrice", (req, res) => {
    const minPrice = parseInt(req.params.minPrice);
    const maxPrice = parseInt(req.params.maxPrice);
    const filter = data.filter((d) => {
        return d.price >= minPrice && d.price <= maxPrice
    })
    let message = filter != [] ? `Le(s) cours trouvé(s) avec comme prix minimum ${minPrice} et prix maximum ${maxPrice}` : `Aucun cours trouvé dans cette tranche de prix ${minPrice}|${maxPrice}`
    res.json(success(message, find))
})

//POST (GET) by date
app.post("/data/date", (req, res) => {
    const minDate = new Date(req.params.minDate);
    const maxDate = new Date(req.params.maxDate);
    res.json({ minDate, maxDate })
    /*
    const filter = data.filter((d) => {
        return d.price >= minPrice && d.price <= maxPrice
    })*/
})

// POST
app.post("/data", (req, res) => {
    const body = req.body
    if (!body.hasOwnProperty("category") || !body.hasOwnProperty("name") || !body.hasOwnProperty("difficulte") || !body.hasOwnProperty("price")) {
        res.status(400).send({ message: "Le cours ne contient pas les informations nécessaires pour être ajouté", data: req.body })
    }
    let dataItem = {}
    for (const key in body) {
        dataItem[key] = body[key]
    }
    dataItem.id = ++lastId
    dataItem.created = new Date().toISOString()
    data.push(dataItem)
    res.send(success(`Le cours à été ajouté avec l'id : ${lastId}`, dataItem))
})

// PUT by ID
app.put("/data/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            for (const key in body) {
                if (key != "id" && data[i].hasOwnProperty(key)) {
                    data[i][key] = body[key]
                }
            }
            res.json(success(`Modification du cours avec id : ${id}`, data[i]))
        }
    }
    res.json(success("Pas de cours à modifier"))
})

// DELETE by ID
app.delete("/data/:id", (req, res) => {
    const id = parseInt(req.params.id)
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            const removed = data.splice(i, 1)
            res.json(success(`Supression du cours avec id : ${id}`, removed))
        }
    }
    res.json(success("Pas de cours à supprimer"))
})

app.listen(port, () => { })