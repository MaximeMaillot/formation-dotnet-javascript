/*
Le système décimal est à base 10 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) Le système hexadécimal est à base (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F)

Ecrivez un programme qui permet de transformer une donnée décimale en hexadécimal.
Ecrivez un autre programme qui permet de transformer une donnée hexadécimale en décimal.
*/

import { pow } from "../../refactoring/functions.js";

let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

let simple = 15 // 15
let normal = 32 // 20
let complex = 529282 // 81382

let simpleHex = "A" // 10
let normalHex = "F2" // 242
let complexHex = "100ABCDEF" // 4306226671

/**
 * Transform a decimal into an hexadecimal
 * @param {Number} decimal 
 * @returns String
 */
function transformDecimalToHex(decimal) {
    let result = decimal
    let remainder
    let hex = ""
    while (result != 0) {
        remainder = result % 16
        result = Math.floor(result / 16)
        hex = hexadecimals[remainder] + hex
        if (result == 0) {
            return hex
        }
    }
}

function transformHexCharacterToDecimal(hex) {
    switch (hex) {
        case "A":
            return 10
            break;
        case "B":
            return 11
            break;
        case "C":
            return 12
            break;
        case "D":
            return 13
            break;
        case "E":
            return 14
            break;
        case "F":
            return 15
            break;
        default:
            hex = parseInt(hex)

            if (isNaN(hex)) {
                throw new Error
            } else {
                return hex
            }
            break;
    }
}

function transformHexadecimalToDecimal(hexadecimal) {
    let decimal = 0
    for (let i = 0; i < hexadecimal.length; i++) {
        decimal += pow(16, (hexadecimal.length - i - 1)) * transformHexCharacterToDecimal(hexadecimal[i])
    }
    return decimal
}

export { transformDecimalToHex, transformHexCharacterToDecimal, transformHexadecimalToDecimal }
