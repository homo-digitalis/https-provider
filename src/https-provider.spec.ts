import { HTTPSProvider } from "./https-provider"

describe("HTTPS Provider", () => {

    it("should provide https options", async () => {
        const domainsYouWantToHTTPS: string[] = []

        domainsYouWantToHTTPS.push("homo-digitalis.org")
        domainsYouWantToHTTPS.push("www.homo-digitalis.org")

        const httpsProvider: HTTPSProvider =
            new HTTPSProvider("homo-digitalis.org", domainsYouWantToHTTPS)

        expect(httpsProvider.provideStatement())
            .toEqual("sudo certbot certonly --standalone --preferred-challenges http --cert-name homo-digitalis.org -d homo-digitalis.org -d www.homo-digitalis.org")
    })

})
