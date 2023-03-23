import { getLongestWord } from "../../../classique/big-string/index.js"

describe('getLongestWord', function () {
    it.concurrent('should return empty string', function () {
        let res = getLongestWord("")
        expect(res).toBe("")
    })

    it.concurrent('should return phrase', function () {
        let res = getLongestWord("ceci est une phrase")
        expect(res).toBe("phrase")
    })

    it.concurrent('should throw an Error', function () {
        expect(() => {
            getLongestWord(529282)
        }).toThrow(Error)
    })
})