export class ZipCodeValidator {
    /**
     * Validates a zip code.
     * @param {string} zipCode
     * @returns {boolean}
    */
    static validate(zipCode: string): boolean {
        const zipCodeRegex = /^\d{5}$/
        return zipCodeRegex.test(zipCode)
    }
}
