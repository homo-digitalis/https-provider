import * as fs from "fs"

export class HTTPSProvider {

    private readonly certificateName: string
    private readonly statement: string

    private httpsOptions: any

    public constructor(certificateName: string, domains?: string[]) {
        this.certificateName = certificateName
        this.statement =
            `sudo certbot certonly --standalone --preferred-challenges http --cert-name ${this.certificateName}`

        if (domains === undefined) {
            this.statement = `${this.statement} -d <your-domain>`
        } else {

            for (const domain of domains) {
                this.statement = `${this.statement} -d ${domain}`
            }
        }
    }

    public provideStatement(): string {
        return this.statement
    }

    public provideHTTPSOptions(): any {
        this.httpsOptions = {
            cert: fs.readFileSync(`/etc/letsencrypt/live/${this.certificateName}/cert.pem`),
            key: fs.readFileSync(`/etc/letsencrypt/live/${this.certificateName}/privkey.pem`),
        }

        return this.httpsOptions
    }
}

const httpsProvider: HTTPSProvider = new HTTPSProvider(process.argv[2])
// tslint:disable-next-line:no-console
console.log(httpsProvider.provideStatement())
