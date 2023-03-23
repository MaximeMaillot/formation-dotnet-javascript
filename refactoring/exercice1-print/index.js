/**
Demandez à l'utilisateur de saisir son nom, prénom et âge.
Affichez une phrase contenant le nom, prénom et âge de l'utilisateur.
 */

import { askUserInput } from "../functions.js";
import User from "../user.js";

let user = new User()
user.setLastName(askUserInput("Entrez votre prénom"))
user.setFirstName(askUserInput("Entrez votre nom"))
user.setAge(askUserInput("Entrez votre age", true, "int"))

console.log(`firstName : ${user.getFirstName()} \nlastName : ${user.getLastName()} \nage : ${user.getAge()}`)