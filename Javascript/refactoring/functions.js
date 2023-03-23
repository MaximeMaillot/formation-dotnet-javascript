/**
 * 
 * @param {String} msg 
 * @param {Boolean} askUntilCorrect 
 * @param {String} type 
 * @returns 
 */
export function askUserInput(msg, askUntilCorrect = true, type = "string") {
    try {
        let input = prompt(msg)
        if (type == "int") {
            input = parseInt(input)
            if (input == "NaN") {
                throw new Error
            }
        } else if (type == "float") {
            input = parseFloat(input)
            if (input == "NaN") {
                throw new Error
            }
        }
        return input
    } catch {
        if (askUntilCorrect) {
            askUserInput(msg, false, type)
        } else {
            console.log("Valeur incorrect")
        }
    }
}

export function pow(a, b) {
    let result = 1
    for (let i = 0; i < b; i++) {
        result = result * a
    }
    return result
}

export function showDataInDiv(divId, data) {
    // get a div ID and show data instead of using console.log()
}