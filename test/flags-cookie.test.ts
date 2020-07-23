import FlagsCookie from "../src/flags-cookie"

describe("FlagsCookie", () => {
    it("parses an invalid cookie header", () => {
        const cookie = "thisisdefinitelyaninvalidvalue"
        const flags = new FlagsCookie(cookie)
        expect(flags.toString()).toEqual("")        
    })
    it("parses an empty cookie header", () => {
        const cookie = ""
        const flags = new FlagsCookie(cookie)
        expect(flags.toString()).toEqual("")        
    })
    it ("parses and reconstructs a single-valued cookie", () => {
        const cookie = "test:true"
        const flags = new FlagsCookie(cookie)
        expect(flags.get("test")).toEqual("true")
        expect(flags.toString()).toEqual(cookie)
    })
    it ("parses and reconstructs a multi-valued cookie", () => {
        const cookie = "test1:true,test2:false,weare:borg"
        const flags = new FlagsCookie(cookie)
        expect(flags.get("test1")).toEqual("true")
        expect(flags.get("test2")).toEqual("false")
        expect(flags.get("weare")).toEqual("borg")
        expect(Object.keys(flags.all())).toHaveLength(3)
        expect(flags.toString()).toEqual(cookie)
    })
    it ("parses and reconstructs a semi-valid multi-valued cookie", () => {
        const cookie = "test1:true,test2:false,weare:borg,resistanceis"
        const flags = new FlagsCookie(cookie)
        expect(flags.get("test1")).toEqual("true")
        expect(flags.get("test2")).toEqual("false")
        expect(flags.get("weare")).toEqual("borg")
        expect(Object.keys(flags.all())).toHaveLength(3)
        expect(flags.toString()).toEqual("test1:true,test2:false,weare:borg")
    })
    it ("creates a new multi-valued cookie", () => {
        const flags = new FlagsCookie()
        flags.set("test1", "true")
        flags.set("test2", "false")
        expect(flags.get("test1")).toEqual("true")
        expect(flags.get("test2")).toEqual("false")
        expect(flags.toString()).toEqual("test1:true,test2:false")
    })
});
