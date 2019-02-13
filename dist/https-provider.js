"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class HTTPSProvider {
    constructor(certificateName, domains) {
        this.certificateName = certificateName;
        this.statement =
            `sudo certbot certonly --standalone --preferred-challenges http --cert-name ${this.certificateName}`;
        for (const domain of domains) {
            this.statement = `${this.statement} -d ${domain}`;
        }
    }
    provideStatement() {
        return this.statement;
    }
    provideHTTPSOptions(certificateName) {
        this.httpsOptions = {
            cert: fs.readFileSync(`/etc/letsencrypt/live/${certificateName}/cert.pem`),
            key: fs.readFileSync(`/etc/letsencrypt/live/${certificateName}/privkey.pem`),
        };
        return this.httpsOptions;
    }
}
exports.HTTPSProvider = HTTPSProvider;
