/// <reference types="node" />
import { Agent } from 'http';
export declare class BancoInterAPI {
    conta: string;
    cert: Buffer;
    key: Buffer;
    ca: Buffer;
    clientId: string;
    clientSecret: string;
    environment: 'PRODUCTION' | 'SANDBOX';
    httpsAgent: Agent;
    baseUrl: string;
    credentials: any;
    private accessToken;
    constructor(conta: string, cert: Buffer, key: Buffer, ca: Buffer, clientId: string, clientSecret: string, environment: 'PRODUCTION' | 'SANDBOX');
    get(path: string, queryParams?: any): Promise<any>;
    post(path: string, data?: any): Promise<any>;
    put(path: string, data?: any): Promise<any>;
    patch(path: string, data?: any): Promise<any>;
    setAcessToken(accessToken: string): Promise<void>;
    connect(): Promise<any>;
    private config;
    private headers;
}
