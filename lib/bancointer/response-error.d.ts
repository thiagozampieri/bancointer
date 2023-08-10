export declare class ResponseError {
    error: Error;
    message: string;
    violations: [];
    status: number;
    constructor(message: string, violations: [], status: number);
    isBancoInterOfflineError(): boolean;
}
