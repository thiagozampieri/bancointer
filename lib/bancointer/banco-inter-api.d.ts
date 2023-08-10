/// <reference types="node" />
import { Agent } from 'http';
export declare class BancoInterAPI {
    conta: string;
    cert: Buffer;
    key: Buffer;
    ca: Buffer;
    clientId: string;
    clientSecret: string;
    httpsAgent: Agent;
    baseUrl: string;
    accessToken: string;
    credentials: any;
    constructor(conta: string, cert: Buffer, key: Buffer, ca: Buffer, clientId: string, clientSecret: string);
    get(path: string, queryParams?: any): Promise<any>;
    post(path: string, data?: any): Promise<any>;
    put(path: string, data?: any): Promise<any>;
    patch(path: string, data?: any): Promise<any>;
    connect(): Promise<any>;
    private config;
    private headers;
}
