import { BancoInterAPI } from '../../../banco-inter-api';
export declare class CriarPixWebhook {
    private api;
    constructor(api: BancoInterAPI);
    criar(chave: string, webhookUrl: string): Promise<any>;
}
