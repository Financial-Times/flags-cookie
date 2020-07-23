export class FlagsCookie {
    /**
     * Value of the flags.
     */
    private flags: {[key: string]: string}

    /**
     * @param flagsCookie The current cookie value.
     */
    constructor(flagsCookie: string = "-") {
        this.flags = Object.create(null)
        flagsCookie.split(',')
            .filter((flagString: string) => flagString.includes(':'))
            .forEach((flag: string) => {
                const [flagName, flagValue] = flag.split(':')
                this.set(flagName, flagValue)
            })
    }

    /**
     * @returns A cookie-safe value for flags and flag-overrides.
     */
    public toString(): string {
        return Object.keys(this.all())
            .map(flagName => `${flagName}:${this.get(flagName)}`)
            .join(',')
    }

    /**
     * @returns All known flags and their values.
     */
    public all(): {[key: string]: string} {
        return this.flags
    }
    
    /**
     * @param key The name of the flag to retrieve.
     * @returns Returns the current cookie value of this flag.
     */
    public get(key: string): string | undefined {
        return this.flags[key]
    }

    public has(key: string): boolean {
        return (key in this.flags)
    }

    /**
     * @param key The name of this flag
     * @param value The state of this flag
     */
    public set(key: string, value: string): void {
        this.flags[key] = value
    }
}

export default FlagsCookie