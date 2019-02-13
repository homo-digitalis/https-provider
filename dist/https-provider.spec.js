"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_provider_1 = require("./https-provider");
describe("HTTPS Provider", () => {
    it("should provide https options", async () => {
        const domainsYouWantToHTTPS = [];
        domainsYouWantToHTTPS.push("homo-digitalis.org");
        domainsYouWantToHTTPS.push("www.homo-digitalis.org");
        const httpsProvider = new https_provider_1.HTTPSProvider("homo-digitalis.org", domainsYouWantToHTTPS);
        expect(httpsProvider.provideStatement())
            .toEqual("sudo certbot certonly --standalone --preferred-challenges http --cert-name homo-digitalis.org -d homo-digitalis.org -d www.homo-digitalis.org");
    });
});
