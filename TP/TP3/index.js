import { main as openMain } from "../TP2/open.js";
import { main as retraitMain } from "../TP2/retrait.js";
import { main as agiosMain } from "../TP2/agios.js";

let choice = prompt("Choisissez la partie (1,2,3) :");
choice = parseInt(choice);

switch (choice) {
  case 1:
    openMain();
    break;
  case 2:
    retraitMain();
    break;
  case 3:
    agiosMain();
    break;
  default:
    break;
}
