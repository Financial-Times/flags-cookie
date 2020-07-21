export default class SpecialistFlagsCookie {

    static COOKIE_NAME = "specialist-flags"

    flags: any

    constructor(flagsCookie: string = "-") {
        this.flags = Object.create(null)
        flagsCookie.split(',')
            .filter((flagString: string) => flagString.includes(':'))
            .forEach((flag: string) => {
                const [flagName, flagValue] = flag.split(':')
                this.setFlag(flagName, flagValue)
            })
    }

    toString(): string {
        return Object.keys(this.getFlags())
            .map(flagName => `${flagName}:${this.getFlag(flagName).state}`)
            .join(',')
    }

    all() {
        return this.flags
    }

    get(key: string): string {
        return this.flags[key]
    }

    set(key: string, value: string) {
        this.flags[key] = value
    }
}
