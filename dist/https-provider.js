"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class HTTPSProvider {
    constructor(certificateName, domains) {
        this.certificateName = certificateName;
        this.statement =
            `sudo certbot certonly --standalone --preferred-challenges http --cert-name ${this.certificateName}`;
        if (domains === undefined) {
            this.statement = `${this.statement} -d <your-domain>`;
        }
        else {
            for (const domain of domains) {
                this.statement = `${this.statement} -d ${domain}`;
            }
        }
    }
    provideStatement() {
        return this.statement;
    }
    provideHTTPSOptions() {
        this.httpsOptions = {
            cert: fs.readFileSync(`/etc/letsencrypt/live/${this.certificateName}/cert.pem`),
            key: fs.readFileSync(`/etc/letsencrypt/live/${this.certificateName}/privkey.pem`),
        };
        return this.httpsOptions;
    }
}
exports.HTTPSProvider = HTTPSProvider;
