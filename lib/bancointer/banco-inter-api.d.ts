/// <reference types="node" />
import { Agent } from 'http';
export declare class BancoInterAPI {
    conta: string;
    cert: Buffer;
    key: Buffer;
    pass: string;
    httpsAgent: Agent;
    baseUrl: string;
    constructor(conta: string, cert: Buffer, key: Buffer, pass: string);
    get(path: string, queryParams?: any): Promise<any>;
    post(path: string, data?: any): Promise<any>;
    private config;
    private headers;
}
