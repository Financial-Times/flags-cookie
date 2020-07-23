import SpecialistFlagsCookie from "../src/specialist-flags-cookie"

describe("SpecialistFlagsCookie", () => {
    it("parses an invalid cookie header", () => {
        const specialistFlagsCookieValue = "thisisdefinitelyaninvalidvalue"
        const specialistFlagsCookie = new SpecialistFlagsCookie(specialistFlagsCookieValue)
        expect(specialistFlagsCookie.toString()).toEqual("")        
    })
    it("parses an empty cookie header", () => {
        const specialistFlagsCookieValue = ""
        const specialistFlagsCookie = new SpecialistFlagsCookie(specialistFlagsCookieValue)
        expect(specialistFlagsCookie.toString()).toEqual("")        
    })
    it ("parses and reconstructs a single-valued cookie", () => {
        const specialistFlagsCookieValue = "test:true"
        const specialistFlagsCookie = new SpecialistFlagsCookie(specialistFlagsCookieValue)
        expect(specialistFlagsCookie.get("test")).toEqual("true")
        expect(specialistFlagsCookie.toString()).toEqual(specialistFlagsCookieValue)
    })
    it ("parses and reconstructs a multi-valued cookie", () => {
        const specialistFlagsCookieValue = "test1:true,test2:false,weare:borg"
        const specialistFlagsCookie = new SpecialistFlagsCookie(specialistFlagsCookieValue)
        expect(specialistFlagsCookie.get("test1")).toEqual("true")
        expect(specialistFlagsCookie.get("test2")).toEqual("false")
        expect(specialistFlagsCookie.get("weare")).toEqual("borg")
        expect(Object.keys(specialistFlagsCookie.all())).toHaveLength(3)
        expect(specialistFlagsCookie.toString()).toEqual(specialistFlagsCookieValue)
    })
    it ("parses and reconstructs a semi-valid multi-valued cookie", () => {
        const specialistFlagsCookieValue = "test1:true,test2:false,weare:borg,resistanceis"
        const specialistFlagsCookie = new SpecialistFlagsCookie(specialistFlagsCookieValue)
        expect(specialistFlagsCookie.get("test1")).toEqual("true")
        expect(specialistFlagsCookie.get("test2")).toEqual("false")
        expect(specialistFlagsCookie.get("weare")).toEqual("borg")
        expect(Object.keys(specialistFlagsCookie.all())).toHaveLength(3)
        expect(specialistFlagsCookie.toString()).toEqual("test1:true,test2:false,weare:borg")
    })
    it ("creates a new multi-valued cookie", () => {
        const specialistFlagsCookie = new SpecialistFlagsCookie()
        specialistFlagsCookie.set("test1", "true")
        specialistFlagsCookie.set("test2", "false")
        expect(specialistFlagsCookie.get("test1")).toEqual("true")
        expect(specialistFlagsCookie.get("test2")).toEqual("false")
        expect(specialistFlagsCookie.toString()).toEqual("test1:true,test2:false")
    })
});
