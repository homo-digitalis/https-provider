"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_provider_1 = require("./https-provider");
describe("HTTPS Provider", () => {
    it("should provide the statement to request certificate", async () => {
        const certificateName = "my-https-certificate";
        const domainsYouWantToHTTPS = [];
        domainsYouWantToHTTPS.push("homo-digitalis.org");
        domainsYouWantToHTTPS.push("www.homo-digitalis.org");
        const httpsProvider = new https_provider_1.HTTPSProvider(certificateName, domainsYouWantToHTTPS);
        expect(httpsProvider.provideStatement())
            .toEqual(`sudo certbot certonly --standalone --preferred-challenges http --cert-name ${certificateName} -d homo-digitalis.org -d www.homo-digitalis.org`);
    });
});
