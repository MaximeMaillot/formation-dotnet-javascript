import User from "../../refactoring/user.js";

describe('User', function () {
    it.concurrent('should return firstName as empty string', function () {
        let user = new User()
        expect(user.getFirstName()).toBe("")
    })

    it.concurrent('should return lastName as empty string', function () {
        let user = new User()
        expect(user.getLastName()).toBe("")
    })

    it.concurrent('should return age of -1', function () {
        let user = new User()
        expect(user.getAge()).toBe(-1)
    })

    it.concurrent('should set firstName to test', function () {
        let user = new User()
        user.setFirstName("test")
        expect(user.getFirstName()).toBe("test")
    })

    it.concurrent('should set lastName to test', function () {
        let user = new User()
        user.setLastName("test")
        expect(user.getLastName()).toBe("test")
    })

    it.each([[18], [25], [32], [70]])('should set age to %d', (age) => {
        let user = new User()
        user.setAge(age)
        expect(user.getAge()).toBe(age)
    })

    it.concurrent('should throw an Error', function () {
        let user = new User()
        expect(() => {
            user.setAge(-1)
        }).toThrow(Error)
    })

    it.concurrent('should throw an Error', function () {
        let user = new User()
        expect(() => {
            user.setAge("test")
        }).toThrow(TypeError)
    })
})
