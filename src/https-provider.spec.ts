import { HTTPSProvider } from "./https-provider"

describe("HTTPS Provider", () => {

    it("should provide the statement to request certificate", async () => {
        const certificateName: string = "my-https-certificate"
        const domainsYouWantToHTTPS: string[] = []

        domainsYouWantToHTTPS.push("homo-digitalis.org")
        domainsYouWantToHTTPS.push("www.homo-digitalis.org")

        const httpsProvider: HTTPSProvider =
            new HTTPSProvider(certificateName, domainsYouWantToHTTPS)

        expect(httpsProvider.provideStatement())
            .toEqual(`sudo certbot certonly --standalone --preferred-challenges http --cert-name ${certificateName} -d homo-digitalis.org -d www.homo-digitalis.org`)
    })

})
