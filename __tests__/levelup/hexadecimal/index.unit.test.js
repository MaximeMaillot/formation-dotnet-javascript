import { transformDecimalToHex, transformHexadecimalToDecimal, transformHexCharacterToDecimal } from "../../../levelup/hexadecimal/index.js";

describe('transformDecimalToHex', function () {
    it.concurrent('should return F', function () {
        let res = transformDecimalToHex(1)
        expect(res).toBe("1")
    })

    it.concurrent('should return 20', function () {
        let res = transformDecimalToHex(32)
        expect(res).toBe("20")
    })

    it.concurrent('should return 81382', function () {
        let res = transformDecimalToHex(529282)
        expect(res).toBe("81382")
    })
})

describe('transformHexCharacterToDecimal', function () {
    it.concurrent('Should return 10', function () {
        let res = transformHexCharacterToDecimal("A")
        expect(res).toBe(10)
    })
    it.concurrent('Should return 1', function () {
        let res = transformHexCharacterToDecimal("1")
        expect(res).toBe(1)
    })
    it.concurrent('Should throw an Error', function () {
        expect(() => { transformHexCharacterToDecimal("error") }).toThrow(Error)
    })
})

describe('transformHexadecimalToDecimal', function () {
    it.concurrent('Should return 10', function () {
        let res = transformHexadecimalToDecimal("A")
        expect(res).toBe(10)
    })
    it.concurrent('Should return 242', function () {
        let res = transformHexadecimalToDecimal("F2")
        expect(res).toBe(242)
    })
    it.concurrent('Should return 4306226671', function () {
        let res = transformHexadecimalToDecimal("100ABCDEF")
        expect(res).toBe(4306226671)
    })
})
