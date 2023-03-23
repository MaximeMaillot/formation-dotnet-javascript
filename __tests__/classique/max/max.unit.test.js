import { findMaxInArray } from "../../../classique/max";

describe('findMaxInArray', function () {
    it.each([
        [[16, 5, 70, -33, 2], 70],
        [[12, 2, 3, 9, 8, 100, 2], 100],
        [[-1, -3, -5, -100], -1]
    ])('should return the max', (array, expected) => {
        let res = findMaxInArray(array)
        expect(res).toBe(expected)
    })

    it.concurrent('should throw an Error', function () {
        expect(() => {
            findMaxInArray([])
        }).toThrow(Error)
    })
})