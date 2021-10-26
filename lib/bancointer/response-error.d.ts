export declare class ResponseError {
    error: Error;
    message: string;
    status: number;
    constructor(message: string, status: number);
    isBancoInterOfflineError(): boolean;
}
