import * as fs from "fs"

export class HTTPSProvider {

    private readonly certificateName: string
    private readonly statement: string

    private httpsOptions: any

    public constructor(certificateName: string, domains: string[]) {
        this.certificateName = certificateName
        this.statement =
            `sudo certbot certonly --standalone --preferred-challenges http --cert-name ${this.certificateName}`

        for (const domain of domains) {
            this.statement = `${this.statement} -d ${domain}`
        }
    }

    public provideStatement(): string {
        return this.statement
    }

    public provideHTTPSOptions(certificateName: string): any {
        this.httpsOptions = {
            cert: fs.readFileSync(`/etc/letsencrypt/live/${certificateName}/cert.pem`),
            key: fs.readFileSync(`/etc/letsencrypt/live/${certificateName}/privkey.pem`),
        }

        return this.httpsOptions
    }
}
