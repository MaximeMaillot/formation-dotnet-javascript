import { tablePrice } from "./constant.js";

export default class Vehicule {
    constructor(id) {
        this.id = id;
        this.startDate = new Date()
        this.endDate;
        this.out = false
        this.payed = false
    }

    getId() {
        return this.id
    }

    getStartDate() {
        return this.startDate
    }

    getEndDate() {
        return this.endDate
    }

    setEndDate(date) {
        this.endDate = date
    }

    isOut() {
        return this.out
    }

    setOut(out) {
        this.out = out
    }

    hasPayed() {
        return this.payed
    }

    setPayed(payed) {
        this.payed = payed
    }

    getPrice() {
        let endDate = new Date()
        const diffTime = Math.abs(endDate - this.startDate);
        let diffMinute = Math.ceil(diffTime / (1000 * 60));
        for (const tab of tablePrice) {
            if (tab.dureeMax == -1) {
                return tab.price
            }
            if (tab.dureeMax < diffMinute) {
                continue
            } else {
                return tab.price
            }
        }
    }
}