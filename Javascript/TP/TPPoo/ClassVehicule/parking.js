import Vehicule from "./vehicule.js";

export default class Parking {
    constructor() {
        /**
         * @type {Vehicule[]}
         */
        this.vehicules = []
    }

    getVehicules() {
        return this.vehicules
    }

    addVehicule(vehicule) {
        this.vehicules.push(vehicule)
    }

    getCarById(id) {
        for (const vehicule of this.vehicules) {
            if (vehicule.getId() == id) {
                return vehicule
            }
        }
        throw Error
    }

    isCarInParking(id) {
        return this.vehicules.find(vehicule => { return vehicule.id === id && !vehicule.out; })
    }

    exitParking(id) {
        for (const vehicule of this.vehicules) {
            if (vehicule.getId() == id && vehicule.isOut() == false) {
                vehicule.setOut(true)
                return true
            }
        }
        return false
    }


}