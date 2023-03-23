import express from "express"
import ip from "ip"
import cors from "cors";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv"
dotenv.config()
import morgan from "morgan"
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express
const app = express();
const port = 7777;

// CONFIG EXPRESS
app
    .use(cors())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        // authorized headers for preflight requests
        // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept',
        )
        next()
        app.options('*', (req, res) => {
            // allowed XHR methods
            res.header(
                'Access-Control-Allow-Methods',
                'GET, PATCH, PUT, POST, DELETE, OPTIONS',
            )
            res.send()
        })
    })
    .use(morgan('dev'))
    .use(express.static(path.join(__dirname, '../public')))
    .use('/static', express.static(path.join(__dirname, '../public')));

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// GET All Contact
app.get("/", (req, res) => {
    try {
        let contactJSON = getJSON(__dirname + "/contact.json")
        const contacts = JSON.parse(contactJSON)
        return res.json({ error: false, contacts })
    } catch (e) {
        res.json({ error: e })
    }
})

app.listen(port, () => { })