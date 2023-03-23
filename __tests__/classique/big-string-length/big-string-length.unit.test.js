import { getLongestWordLength } from "../../../classique/big-string-length/index.js"

describe('getLongestWord', function () {
    it.concurrent('should return 0', function () {
        let res = getLongestWordLength("")
        expect(res).toBe(0)
    })

    it.concurrent('should return 6', function () {
        let res = getLongestWordLength("ceci est une phrase")
        expect(res).toBe(6)
    })

    it.concurrent('should throw an Error', function () {
        expect(() => {
            getLongestWordLength(529282)
        }).toThrow(Error)
    })
})