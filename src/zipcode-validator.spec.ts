import { ZipCodeValidator } from './zipcode-validator'
import { type Validator } from './zipcode-validator-protocol'

const makeSut = (): Validator => {
    const sut = ZipCodeValidator
    return sut
}

describe('ZipCode Validator', () => {
    test('should returns false if an invalid zip code is provided', () => {
        const sut = makeSut()
        expect(sut.validate('1234')).toBe(false)
    })

    test('should returns false if an empty zip code is provided', () => {
        const sut = makeSut()
        expect(sut.validate('')).toBe(false)
    })

    test('should returns true if a valid zip code is provided', () => {
        const sut = makeSut()
        expect(sut.validate('24701')).toBe(true)
    })
})
