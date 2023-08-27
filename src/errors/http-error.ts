export class HTTPError extends Error {
    statusCode: number;
    conttext?: string;

    constructor(statusCode:number, message: string, conttext?: string) {
        super(message);
        this.statusCode = statusCode;
        this.conttext = conttext;
    }
}
