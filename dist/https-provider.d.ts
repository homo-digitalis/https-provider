export declare class HTTPSProvider {
    private readonly certificateName;
    private readonly statement;
    private httpsOptions;
    constructor(certificateName: string, domains?: string[]);
    provideStatement(): string;
    getPublicKey(): any;
    provideHTTPSOptions(): any;
}
