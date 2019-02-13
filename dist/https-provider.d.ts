export declare class HTTPSProvider {
    private certificateName;
    private statement;
    private httpsOptions;
    constructor(certificateName: string, domains: string[]);
    provideStatement(): string;
    provideHTTPSOptions(certificateName: string): any;
}
