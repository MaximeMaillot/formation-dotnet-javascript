export default class Pendu {
    constructor(motATrouver) {
        this.motATrouver = motATrouver.toUpperCase()
        this.masque = motATrouver.replace(/./g, '*')
        this.nbEssais = 11
        this.dejaPropose = []
        this.win = false
    }

    checkWinCondition() {
        if (this.masque.indexOf('*') == -1) {
            this.win = true
        }
    }

    proposition(letter) {
        let found = false
        letter = letter.toUpperCase()
        if (!this.dejaPropose.includes(letter)) {
            this.dejaPropose.push(letter)
            for (let i = 0; i < this.motATrouver.length; i++) {
                if (this.motATrouver[i] === letter) {
                    this.masque = this.masque.substring(0, i) + letter + this.masque.substring(i + 1)
                    found = true
                }
            }
            this.checkWinCondition()
        }
        if (!found) {
            this.nbEssais--
        }
        return found
    }
}