export class ZipCodeValidator {
    static validate(zipCode: string): boolean {
        const zipCodeRegex = /^\d{5}$/
        return zipCodeRegex.test(zipCode)
    }
}
